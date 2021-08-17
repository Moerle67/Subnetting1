/**
 * ipv4Wert
 */
package subnetting1;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

/**
 * Verwaltung von IPv4 Adressen
 *
 * @author moerle
 */
public class Ipv4Wert {

    private long addresse;
    private int CDIR;
    ArrayList<Ipmsg> protokoll = new ArrayList<>();

    /**
     * Standart Konstruktor
     *
     * erzeugt 192.168.0.1/24
     */
    Ipv4Wert() {
        this.CDIR = 24;
        this.addresse = Ipv4Wert.getStrtoLong("192.168.1.1");
    }

    /**
     * Kunstruktor mit IP Übergabe in CDIR Schreibweise
     *
     * @param eingabe 192.168.0.1/24
     */
    Ipv4Wert(String eingabe) {
        this.setzeNeueAdresse(eingabe);
    }
    
    Ipv4Wert(long ip, int cdir) {
        this.addresse = ip;
        this.CDIR = cdir;
    }

    /**
     * Neusetzen der Adresse
     *
     * @param eingabe Neue IP in CDIR Schreibweise
     */
    public void setzeNeueAdresse(String eingabe) {
        String[] liste1 = eingabe.split("/");
        if (liste1.length != 2) {
            return;
        }
        this.CDIR = Integer.parseInt(liste1[1]);
        this.addresse = Ipv4Wert.getStrtoLong(liste1[0]);
    }

    /**
     * Neusetzen der Adresse
     *
     * @param eingabe IP ohne CDIR
     * @param cdir CDIR
     */
    public void setzeNeueAdresse(String eingabe, int cdir) {
        this.CDIR = cdir;
        this.addresse = Ipv4Wert.getStrtoLong(eingabe);
    }

    /**
     * Zufällige Auswahl einer Adresse
     */
    public void setzeRNDAdress() {
        long max = (long) Math.pow(2, 32);
        this.addresse = (long) (Math.random() * max + 1);
        this.CDIR = (int) (Math.random() * 16 + 15);
    }

    /**
     * Umwandlung einer IP (ohne CDIR) in einen Longwert
     *
     * @param string IP siehe "192.168.0.1"
     * @return Longwert der IP
     */
    public static long getStrtoLong(String string) {
        long antwort = 0;
        String[] liste = string.split("\\.");
        if (liste.length != 4) {
            return 0;
        }
        for (int i = 0; i <= 3; i++) {
            antwort *= 256;
            antwort += Integer.parseInt(liste[i]);
        }
        return antwort;
    }

    /**
     * Wandelt eine Maske in den entsprechenden CDIR Wert um
     *
     * @param eingabe Maske als String
     * @return cdir-Integer Wert
     */
    public static int getMaskeToCDIR(String eingabe) {
        int[] liste = {0, 128, 192, 224, 240, 248, 252, 254};
        String[] oktets = eingabe.split("\\.");
        if (oktets.length != 4) {
            return 0;
        }
        int i, j;
        for (i = 0; i < 4; i++) {
            if (Integer.parseInt(oktets[i]) != 255) {
                break;
            }
        }
        for (j = 0; j < liste.length; j++) {
            if (Integer.parseInt(oktets[i]) == liste[j]) {
                break;
            }
        }
        return i * 8 + j;
    }

    /**
     * Setzt die Maske
     *
     * @param eingabe CDIR
     */
    public void setCDIR(int eingabe) {
        this.CDIR = eingabe;
    }
    /**
     * setzte Adresse
     * @param eingabe Adresse als Long-Wert
     */
    public void setAdresse(long eingabe) {
        this.addresse=eingabe;
    }

    /**
     * Erzeugung eines Longwertes aus einem Array
     *
     * @param eingabe 4 teiliges Array einer IP
     * @return Longwert des Arrays
     */
    public static long getArrayToLong(int[] eingabe) {
        long antwort = 0;
        for (int i = 0; i < 4; i++) {
            antwort *= 256;
            antwort += eingabe[i];
        }
        return antwort;
    }

    /**
     * Gibt einfach dem Longwert der Adresse aus
     *
     * @return Longwert der IP aus
     */
    public String getAdresse() {
        return Ipv4Wert.getAdrStr(this.addresse);
    }

    /**
     * Gibt den CDIR zurück
     *
     * @return CDIR der Adresse
     */
    public String getAdresseCDIR() {
        return Ipv4Wert.getAdrStr(this.addresse) + "/" + this.CDIR;
    }

    /**
     * Wandelt den CDIR in ein INT[4] Array
     *
     * @return INT[4] Array der Maske
     */
    public String getMaskeStr() {
        int[] antwort = Ipv4Wert.getMaskeArray(this.CDIR);
        return antwort[0] + "." + antwort[1] + "." + antwort[2] + "." + antwort[3];
    }

    public static String getCdirToMaskeStr(int cdir) {
        int[] antwort = Ipv4Wert.getMaskeArray(cdir);
        return antwort[0] + "." + antwort[1] + "." + antwort[2] + "." + antwort[3];
    }
    /**
     * Wandelt einen beliebigen CDIR in eine Maske um
     *
     * @param cdir beliebiger CDIR
     * @return INT[4] Array
     */
    public static int[] getMaskeArray(int cdir) {
        int[] antwort = new int[4];
        int[] liste = {0, 128, 192, 224, 240, 248, 252, 254};
        int vollesOktet = cdir / 8;
        int rest = cdir % 8;
        for (int i = 0; i < vollesOktet; i++) {
            antwort[i] = 255;
        }
        antwort[vollesOktet] = liste[rest];
        return antwort;
    }

    /**
     * Wandelt eine beliebige Long-Adresse in ein Int[4] Array
     *
     * @param adresse als Long Wert
     * @return Int[4] Array
     */
    public static int[] getAdrArray(long adresse) {
        int[] antwort = new int[4];
        for (int i = 3; i >= 0; i--) {
            antwort[i] = (int) (adresse % 256);
            adresse /= 256;
        }
        return antwort;
    }

    /**
     * Wandelt einen Longwert einer Adresse in die entsprechende Punkt-Notation
     *
     * @param eingabe Long-Wert einer Adresse
     * @return Punkt-Notation einer Adresse
     */
    public static String getAdrStr(long eingabe) {
        String antwort = "";
        long wert = eingabe;
        for (int i = 0; i < 3; i++) {
            antwort = "." + (wert % 256) + antwort;
            wert /= 256;
        }
        return wert + antwort;
    }

    /**
     * Gibt die Netz-ID als Array zurück
     *
     * @return Netz-ID als int[4]
     */
    public int[] getNIDArray() {
        int[] antwort = new int[4];

        int[] adresse = Ipv4Wert.getAdrArray(this.addresse);
        int[] maske = Ipv4Wert.getMaskeArray(this.CDIR);

        for (int i = 0; i < maske.length; i++) {
            antwort[i] = adresse[i] & maske[i];
        }
        return antwort;
    }

    /**
     * Wandelt ein int[4] Array in die Punkt-Notation einer Adresse um
     *
     * @param eingabe int[4] für Adresse
     * @return Punkt-Notation einer Adresse
     */
    public static String getIpv4(int[] eingabe) {
        return eingabe[0] + "." + eingabe[1] + "." + eingabe[2] + "." + eingabe[3];
    }

    /**
     * Rückgabe des BC als int[4] Array
     * @return int[4] Array
     */
    public int[] getBCArray() {
        int[] antwort = new int[4];

        int[] adresse = Ipv4Wert.getAdrArray(this.addresse);
        int[] maske = Ipv4Wert.getMaskeArray(this.CDIR);

        for (int i = 0; i < maske.length; i++) {
            antwort[i] = 256 + (adresse[i] | ~maske[i]);
        }
        return antwort;
    }

//    public static String[] getOctets(long eingabe) {
//        String[] antwort = new String[4];
//        return antwort;
//    }
    
    /**
     * Rückgabe der Adresse
     * @return Adresse als Long-Wert
     */
    public long getAdrLong() {
        return this.addresse;
    }
    
    /**
     * Rückgabe des CDIR Wertes
     * @return int CDIR
     */
    public int getCDIR() {
        return this.CDIR;
    }

    @Override
    public String toString() {
        return this.getAdresseCDIR();
    }
    
    /**
     * Protokollverwaltung
     */
    
    /**
     * Protokolleintrag erzeugen
     * Datum und IP wird hinzugefügt
     * @param msg Nachricht als String
     */
    public void addMsg(String msg) {
        Ipmsg ipmsg = new Ipmsg();
        ipmsg.ip= this;
        ipmsg.ipZeit = LocalDateTime.now();
        ipmsg.ipnachricht = msg;
        protokoll.add(ipmsg);
        
        System.out.println(this.getLastMsg());
    }
    
    /**
     * Ausgabe der letzten Nachricht
     * @return letzte Nachricht
     */
    public String getLastMsg() {
        if (!protokoll.isEmpty()) 
            return protokoll.get(protokoll.size()-1).toString();
        else
            return "Protokoll ist leer";
    }
    /**
     * Ermittlung eines betreffenden Ranges
     * @param eingabe Anzahl Clients
     * @return passender Range
     */
    public static int getRange(int eingabe) {
        return (int) Math.pow(2, Math.ceil(Math.log(eingabe)/Math.log(2)));
    }
    
    /**
     * Umwandlung eines Ranges in die betreffende CDIR Notation
     * @param range Range
     * @return CDIR
     */
    public static int getRangetoCdir(int range) {
        return 32 - (int) (Math.log(range)/Math.log(2));
    }
}

class Ipmsg {

    Ipv4Wert ip;
    String ipnachricht;
    LocalDateTime ipZeit;

    @Override
    public String toString() {
        String antwort;
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern( "d.MM.YY - hh:mm" );
        antwort = formatter.format(this.ipZeit) + " : " + this.ip + " - " + this.ipnachricht;
        return antwort;
    }
}
