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
public class SystByte {
    private int zahl;
    private final String hexTab = "0123456789ABCDEF";

    public SystByte(int zahl) {
        if (zahl>255) {
            msg("Zahl darf max 355 sein! "+zahl);
            return;
        }
        if (zahl<0) {
            msg("Zahl muss größer als 0 sein! "+zahl);
            return;
        }
        this.zahl = zahl;
    }

    public SystByte(String eingabe, int basis) {
        if (basis==16) {
            this.setHex(eingabe);
        } else if (basis==2) {
            this.setBin(eingabe);
        } else {
            msg("Basis muss 2 oder 16 sein.  "+ basis);
        }
    }
    
    
    public boolean setHex(String eingabe) {
        eingabe = eingabe.toUpperCase();
        char[] liste = eingabe.toCharArray();
        if (liste.length!=2) {
            this.msg("Hex muss zweistellig sein: '"+eingabe+"'");
            this.zahl=-1;
            return false;
        }
        int ziffer1 =this.hexTab.indexOf(liste[0]);
        int ziffer2 =this.hexTab.indexOf(liste[1]);
        this.zahl = ziffer1*16+ziffer2;
        return true;
    }
    
    public String getHex(){
        int ziffer1 = this.zahl/16;
        int ziffer2 = this.zahl%16;
        String antwort = this.hexTab.substring(ziffer1, ziffer1+1)+this.hexTab.substring(ziffer2, ziffer2+1);
        return antwort;
    }
    
    public boolean setBin(String eingabe) {
        char[] liste = eingabe.toCharArray();
        int zahl =0;
        for (char wert: liste) {
            switch (wert) {
                case '0' :
                    zahl += zahl;
                    break;
                case 'I':
                case '1':
                case 'l':
                case '|':
                    zahl += zahl;
                    zahl++;
            }
        }
        if (zahl>255) {
            msg("Binärwert zu groß");
            this.zahl = -1;
            return false;
        }
        this.zahl = zahl;
        return true;
    }
    
    public String getBin() {
        int nummer = this.zahl;
        String antwort = "";
        antwort += nummer > 127 ? "I" : "0";
        nummer %= 128;
        antwort += nummer > 63  ? "I" : "0";
        nummer %= 64;
        antwort += nummer > 31  ? "I" : "0";
        nummer %= 32;
        antwort += nummer > 15  ? "I" : "0";
        nummer %= 16;
        antwort +=" ";
        antwort += nummer > 7   ? "I" : "0";
        nummer %= 8;
        antwort += nummer > 3   ? "I" : "0";
        nummer %= 4;
        antwort += nummer > 1   ? "I" : "0";
        nummer %= 2;
        antwort += nummer == 1   ? "I" : "0";
        return antwort;
    }

    private void msg(String eingabe) {
        System.out.println("SystByte: "+eingabe);
        throw new NumberFormatException(eingabe);
    }

    @Override
    public boolean equals(Object obj) {
        SystByte temp = (SystByte) obj;
        return (this.zahl == temp.zahl);
    }

    @Override
    public String toString() {
        return ""+this.zahl; 
    }
    
    
    Object getDec() {
        return this.zahl;
    }
}
