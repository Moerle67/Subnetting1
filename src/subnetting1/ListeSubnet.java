/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package subnetting1;

/**
 *
 * @author Moerle
 */
public class ListeSubnet {
    public SubAbt[] liste;
    public SubAbt[] ergListe;
    public Ipv4Wert netz;
    public String[][] abteilungen = {
            {"IT", "20"},
            {"GL", "10"},
            {"Versand", "40"},
            {"Produktion", "400"},
            {"Buchhaltung", "40"},
            {"QA", "15"},
            {"Perso", "20"},
            {"Außendienst", "50"},
            {"Ausbildung", "20"}
        };

    /**
     * Erzeuge eine neues Übungsnetz
     */
    public void erzeugeNetz() {
        String[][] abteilungen = {
            {"IT", "20"},
            {"GL", "10"},
            {"Versand", "40"},
            {"Produktion", "400"},
            {"Buchhaltung", "40"},
            {"QA", "15"},
            {"Perso", "20"},
            {"Außendienst", "50"},
            {"Ausbildung", "20"}
        };
        int anzahlAbteilungen = (int) (Math.random() * abteilungen.length) + 1;
        SubAbt[] listeAbteilung = new SubAbt[anzahlAbteilungen];
        // Liste füllen
        for (int i = 0; i < anzahlAbteilungen; i++) {
            listeAbteilung[i] = new SubAbt(abteilungen[i][0], (int) (Math.random() * Integer.parseInt(abteilungen[i][1]) + 1));
        }
        // notwendiger Range ermitteln
        int range = 0;
        for (SubAbt feld : listeAbteilung) {
            range += Ipv4Wert.getRange(feld.clients + 3);
        }
        range = Ipv4Wert.getRange(range);
        // CDIR
        this.netz = new Ipv4Wert();
        this.netz.setzeRNDAdress();
        int cdir = 32 - (int) (Math.log(range) / Math.log(2));
        this.netz.setCDIR(cdir);
        String ip = Ipv4Wert.getIpv4(this.netz.getNIDArray());
        this.netz.setzeNeueAdresse(ip, cdir);
        //subAbt[] geloesteListe = loeseListe();
        this.liste = listeAbteilung;
        this.errechneErgebnisListe();
    }
    
    /**
     * Entwickle das Übungsnetz
     */
    private void errechneErgebnisListe() {
        SubAbt[] ergListe = new SubAbt[this.liste.length];
        // Originalliste übertragen
        for (int i = 0; i < ergListe.length; i++) {
            ergListe[i] = this.liste[i];
        }
        // Sortieren Bubble Sort
        SubAbt temp;
        for (int i = 0; i < ergListe.length; i++) {
            for (int j = 0; j < ergListe.length - 1; j++) {
                if (ergListe[j].clients < ergListe[j + 1].clients) {
                    // Tauschen
                    temp = ergListe[j];
                    ergListe[j] = ergListe[j + 1];
                    ergListe[j + 1] = temp;
                }
            }
        }
        ergListe[0].ip = this.netz.getAdresse();
        ergListe[0].cdir = Ipv4Wert.getRangetoCdir(Ipv4Wert.getRange(ergListe[0].clients + 3));
        long neueIP;
        for (int i = 1; i < ergListe.length; i++) {
            neueIP = Ipv4Wert.getStrtoLong(ergListe[i - 1].ip) + Ipv4Wert.getRange(ergListe[i - 1].clients + 3);
            ergListe[i].ip = Ipv4Wert.getAdrStr(neueIP);
            ergListe[i].cdir = Ipv4Wert.getRangetoCdir(Ipv4Wert.getRange(ergListe[i].clients + 3));
        }
        this.ergListe= ergListe;
        //this.fuelleTabelle(ergListe);
    }


}