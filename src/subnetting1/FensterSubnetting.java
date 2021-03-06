/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package subnetting1;

import javax.swing.JCheckBox;

/**
 *
 * @author moerle
 */
public class FensterSubnetting extends javax.swing.JFrame {

    private ListeSubnet liste1;

    /**
     * Creates new form Fenster2
     */
    public FensterSubnetting() {
        initComponents();
        liste1 = new ListeSubnet();
        liste1.erzeugeNetz();
        this.fuelleTextfeld();
        this.pack();
        this.setLocationRelativeTo(null);
        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jScrollPane2 = new javax.swing.JScrollPane();
        jTextArea1 = new javax.swing.JTextArea();
        jScrollPane3 = new javax.swing.JScrollPane();
        jTable2 = new javax.swing.JTable();
        jButtonNeu = new javax.swing.JButton();
        jButtonTest = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTextInfo = new javax.swing.JTextArea();
        jCheckBox1 = new javax.swing.JCheckBox();
        jCheckBox2 = new javax.swing.JCheckBox();
        jCheckBox3 = new javax.swing.JCheckBox();
        jCheckBox4 = new javax.swing.JCheckBox();
        jCheckBox5 = new javax.swing.JCheckBox();
        jCheckBox6 = new javax.swing.JCheckBox();
        jCheckBox7 = new javax.swing.JCheckBox();
        jCheckBox8 = new javax.swing.JCheckBox();
        jCheckBox9 = new javax.swing.JCheckBox();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jTextArea1.setEditable(false);
        jTextArea1.setColumns(20);
        jTextArea1.setRows(5);
        jScrollPane2.setViewportView(jTextArea1);

        jTable2.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null}
            },
            new String [] {
                "Abteilung", "Clients", "Notwendig", "Range", "Maske", "NID", "BC", "1. Adresse", "Letzte Adresse"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.String.class, java.lang.Integer.class, java.lang.Integer.class, java.lang.Integer.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }
        });
        jTable2.setRowHeight(18);
        jTable2.setShowGrid(true);
        jTable2.addComponentListener(new java.awt.event.ComponentAdapter() {
            public void componentMoved(java.awt.event.ComponentEvent evt) {
                jTable2ComponentMoved(evt);
            }
        });
        jScrollPane3.setViewportView(jTable2);

        jButtonNeu.setText("Neu");
        jButtonNeu.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonNeuActionPerformed(evt);
            }
        });

        jButtonTest.setText("??berpr??fen");
        jButtonTest.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonTestActionPerformed(evt);
            }
        });

        jTextInfo.setEditable(false);
        jTextInfo.setColumns(20);
        jTextInfo.setRows(5);
        jScrollPane1.setViewportView(jTextInfo);

        jCheckBox1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox1ActionPerformed(evt);
            }
        });

        jCheckBox2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox2ActionPerformed(evt);
            }
        });

        jCheckBox3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox3ActionPerformed(evt);
            }
        });

        jCheckBox4.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox4ActionPerformed(evt);
            }
        });

        jCheckBox5.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox5ActionPerformed(evt);
            }
        });

        jCheckBox6.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox6ActionPerformed(evt);
            }
        });

        jCheckBox7.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox7ActionPerformed(evt);
            }
        });

        jCheckBox8.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox8ActionPerformed(evt);
            }
        });

        jCheckBox9.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jCheckBox9ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 844, Short.MAX_VALUE))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jButtonNeu)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(jButtonTest))
                    .addComponent(jScrollPane3, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 975, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jCheckBox2)
                    .addComponent(jCheckBox3)
                    .addComponent(jCheckBox1)
                    .addComponent(jCheckBox4)
                    .addComponent(jCheckBox5)
                    .addComponent(jCheckBox6)
                    .addComponent(jCheckBox7)
                    .addComponent(jCheckBox9)
                    .addComponent(jCheckBox8))
                .addGap(0, 20, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(jScrollPane2, javax.swing.GroupLayout.DEFAULT_SIZE, 252, Short.MAX_VALUE)
                    .addComponent(jScrollPane1))
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(12, 12, 12)
                        .addComponent(jScrollPane3, javax.swing.GroupLayout.PREFERRED_SIZE, 197, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(27, 27, 27)
                        .addComponent(jCheckBox1)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jCheckBox2, javax.swing.GroupLayout.PREFERRED_SIZE, 18, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jCheckBox3, javax.swing.GroupLayout.PREFERRED_SIZE, 18, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jCheckBox4, javax.swing.GroupLayout.PREFERRED_SIZE, 18, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jCheckBox5, javax.swing.GroupLayout.PREFERRED_SIZE, 18, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jCheckBox6, javax.swing.GroupLayout.PREFERRED_SIZE, 18, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jCheckBox7, javax.swing.GroupLayout.PREFERRED_SIZE, 18, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jCheckBox8, javax.swing.GroupLayout.PREFERRED_SIZE, 18, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jCheckBox9)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jButtonTest)
                    .addComponent(jButtonNeu))
                .addContainerGap())
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jButtonNeuActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonNeuActionPerformed
        // TODO add your handling code here:
        this.liste1.erzeugeNetz();

        // Tabelle leeren
        this.clearErgTab();
        this.fuelleTextfeld();
    }//GEN-LAST:event_jButtonNeuActionPerformed

    private void jButtonTestActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonTestActionPerformed
        this.testeTabelle();
    }//GEN-LAST:event_jButtonTestActionPerformed

    private void jCheckBox1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox1ActionPerformed
        // TODO add your handling code here:
        this.checkBoxTest(1, jCheckBox1);
    }//GEN-LAST:event_jCheckBox1ActionPerformed

    private void jCheckBox2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox2ActionPerformed
        this.checkBoxTest(2, jCheckBox2);
    }//GEN-LAST:event_jCheckBox2ActionPerformed

    private void jCheckBox3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox3ActionPerformed
        this.checkBoxTest(3, jCheckBox3);
    }//GEN-LAST:event_jCheckBox3ActionPerformed

    private void jCheckBox4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox4ActionPerformed
        this.checkBoxTest(4, jCheckBox4);
    }//GEN-LAST:event_jCheckBox4ActionPerformed

    private void jCheckBox5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox5ActionPerformed
        this.checkBoxTest(5, jCheckBox5);
    }//GEN-LAST:event_jCheckBox5ActionPerformed

    private void jCheckBox6ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox6ActionPerformed
        this.checkBoxTest(6, jCheckBox6);
    }//GEN-LAST:event_jCheckBox6ActionPerformed

    private void jCheckBox7ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox7ActionPerformed
        this.checkBoxTest(7, jCheckBox7);
    }//GEN-LAST:event_jCheckBox7ActionPerformed

    private void jCheckBox8ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox8ActionPerformed
        this.checkBoxTest(8, jCheckBox8);
    }//GEN-LAST:event_jCheckBox8ActionPerformed

    private void jCheckBox9ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jCheckBox9ActionPerformed
        this.checkBoxTest(9, jCheckBox9);
    }//GEN-LAST:event_jCheckBox9ActionPerformed

    private void jTable2ComponentMoved(java.awt.event.ComponentEvent evt) {//GEN-FIRST:event_jTable2ComponentMoved
        // TODO add your handling code here:
        System.out.println("evt");
    }//GEN-LAST:event_jTable2ComponentMoved

    private void checkBoxTest(int zeile, JCheckBox box) {
        if (zeile <= this.liste1.liste.length) {
            Fehler fehler = new Fehler("Fehler in Zeile " + zeile + "\n\n", false);
            this.testeZeile(zeile - 1, fehler);
            if (!fehler.ist) {
                fehler.text = "Es wurden keine Fehler in Zeile" + zeile + " gefunden. Bravo!";
                box.setSelected(true);
            } else {
                box.setSelected(false);
            }
            jTextInfo.setText(fehler.text);
        } else {
            box.setSelected(false);
        }
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(FensterSubnetting.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(FensterSubnetting.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(FensterSubnetting.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(FensterSubnetting.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new FensterSubnetting().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButtonNeu;
    private javax.swing.JButton jButtonTest;
    private javax.swing.JCheckBox jCheckBox1;
    private javax.swing.JCheckBox jCheckBox2;
    private javax.swing.JCheckBox jCheckBox3;
    private javax.swing.JCheckBox jCheckBox4;
    private javax.swing.JCheckBox jCheckBox5;
    private javax.swing.JCheckBox jCheckBox6;
    private javax.swing.JCheckBox jCheckBox7;
    private javax.swing.JCheckBox jCheckBox8;
    private javax.swing.JCheckBox jCheckBox9;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JScrollPane jScrollPane3;
    private javax.swing.JTable jTable2;
    private javax.swing.JTextArea jTextArea1;
    private javax.swing.JTextArea jTextInfo;
    // End of variables declaration//GEN-END:variables

    private void fuelleTextfeld() {
        String t = "";
        t += "Subtnetz: " + this.liste1.netz.getAdresseCDIR() + "\n\n";
        for (SubAbt eingabe : this.liste1.liste) {
            t += eingabe.toStringkurz() + "\n";
        }
        jTextArea1.setText(t);
    }

    private void fuelleTabelle(SubAbt[] ergListe) {
        this.clearErgTab();

        for (int i = 0; i < this.liste1.ergListe.length; i++) {
            jTable2.setValueAt(ergListe[i].name, i, 0);
            jTable2.setValueAt(ergListe[i].clients, i, 1);
            jTable2.setValueAt(ergListe[i].clients + 3, i, 2);
            jTable2.setValueAt(Ipv4Wert.getRange(ergListe[i].clients + 3), i, 3);
            jTable2.setValueAt(Ipv4Wert.getIpv4(Ipv4Wert.getMaskeArray(ergListe[i].cdir)), i, 4);
            jTable2.setValueAt(ergListe[i].ip, i, 5);
            long nid = Ipv4Wert.getStrtoLong(ergListe[i].ip);
            long bc = nid + Ipv4Wert.getRange(ergListe[i].clients + 3) - 1;
            jTable2.setValueAt(Ipv4Wert.getAdrStr(bc), i, 6);
            jTable2.setValueAt(Ipv4Wert.getAdrStr(nid + 1), i, 7);
            jTable2.setValueAt(Ipv4Wert.getAdrStr(bc - 1), i, 8);
        }

    }

    private void testeTabelle() {
        Fehler fehler = new Fehler("Folgende Fehler wurden gefunden: \n\n", false);
        for (int i = 0; i < this.liste1.ergListe.length; i++) {
            fehler = this.testeZeile(i, fehler);
        }
        if (!fehler.ist) {
            fehler.text = "Es wurden keine Fehler gefunden. Bravo!";
        }
        jTextInfo.setText(fehler.text);
    }

    private Fehler testeZeile(int i, Fehler fehler) {
        long nidSys = Ipv4Wert.getStrtoLong(this.liste1.ergListe[i].ip);
        int rangeSys = Ipv4Wert.getRange(this.liste1.ergListe[i].clients + 3);
        long bcSys = nidSys + rangeSys - 1;
        // Name
        try {
            if (!jTable2.getValueAt(i, 0).equals(this.liste1.ergListe[i].name)) {
                fehler.ist = true;
                fehler.text += "Zeile " + (i + 1) + ": Abteilung, ";
            }
        } catch (Exception e) {
            msg("Zeile " + (i + 1) + " Abteilung nicht erkannt.");
        }
        // Clients 1
        try {
        if ((int) jTable2.getValueAt(i, 1) != this.liste1.ergListe[i].clients) {
            fehler.ist = true;
            fehler.text += "Zeile " + (i + 1) + ": Clients, ";
        }
        } catch (Exception e) {
            msg("Zeile " + (i + 1) + " Clients nicht erkannt.");
        }
        try {
        // Notwendig 2
        if ((int) jTable2.getValueAt(i, 2) != this.liste1.ergListe[i].clients + 3) {
            fehler.ist = true;
            fehler.text += "Zeile " + (i + 1) + ": Notwendig, ";
        }
        } catch (Exception e) {
            msg("Zeile " + (i + 1) + " Notwendig nicht erkannt.");
        }
        try {
        // Range 3
        if ((int) jTable2.getValueAt(i, 3) != rangeSys) {
            //System.out.println((int) jTable2.getValueAt(i, 3)+"-"+rangeSys);
            fehler.ist = true;
            fehler.text += "Zeile " + (i + 1) + ": Range, ";
        }
        } catch (Exception e) {
            msg("Zeile " + (i + 1) + " Range nicht erkannt.");
        }
        try {
        // Maske 4
        if (!jTable2.getValueAt(i, 4).equals(Ipv4Wert.getCdirToMaskeStr(Ipv4Wert.getRangetoCdir(rangeSys)))) {
            fehler.ist = true;
            fehler.text += "Zeile " + (i + 1) + ": Maske, ";
        }
        } catch (Exception e) {
            msg("Zeile " + (i + 1) + " Maske nicht erkannt.");
        }
        try {
        // NID 5
        if (Ipv4Wert.getStrtoLong((String) jTable2.getValueAt(i, 5)) != nidSys) {
            //System.out.println((int) jTable2.getValueAt(i, 3)+"-"+rangeSys);
            fehler.ist = true;
            fehler.text += "Zeile " + (i + 1) + ": NID, ";
        }
        } catch (Exception e) {
            msg("Zeile " + (i + 1) + " NID nicht erkannt.");
        }
        try {
        // BC 6
        if (Ipv4Wert.getStrtoLong((String) jTable2.getValueAt(i, 6)) != bcSys) {
            //System.out.println((int) jTable2.getValueAt(i, 3)+"-"+rangeSys);
            fehler.ist = true;
            fehler.text += "Zeile " + (i + 1) + ": BC, ";
        }
        } catch (Exception e) {
            msg("Zeile " + (i + 1) + " BC nicht erkannt.");
        }
        try {
        // 1. Adresse 7
        if (Ipv4Wert.getStrtoLong((String) jTable2.getValueAt(i, 7)) != nidSys + 1) {
            //System.out.println((int) jTable2.getValueAt(i, 3)+"-"+rangeSys);
            fehler.ist = true;
            fehler.text += "Zeile " + (i + 1) + ": 1. Adresse, ";
        }
         } catch (Exception e) {
            msg("Zeile " + (i + 1) + " 1. Adresse nicht erkannt.");
        }
        try {
        // Letzte Adresse 8
        if (Ipv4Wert.getStrtoLong((String) jTable2.getValueAt(i, 8)) != bcSys - 1) {
            //System.out.println((int) jTable2.getValueAt(i, 3)+"-"+rangeSys);
            fehler.ist = true;
            fehler.text += "Zeile " + (i + 1) + ": letzte Adresse, ";
        }
        } catch (Exception e) {
            msg("Zeile " + (i + 1) + " letzte Adresse nicht erkannt.");
        }

        return fehler;
    }

    private void clearErgTab() {
        for (int i = 0; i < jTable2.getRowCount(); i++) {
            for (int j = 0; j < jTable2.getColumnCount(); j++) {
                jTable2.setValueAt("", i, j);
            }
        }
        jCheckBox1.setSelected(false);
        jCheckBox2.setSelected(false);
        jCheckBox3.setSelected(false);
        jCheckBox4.setSelected(false);
        jCheckBox5.setSelected(false);
        jCheckBox6.setSelected(false);
        jCheckBox7.setSelected(false);
        jCheckBox8.setSelected(false);
        jCheckBox9.setSelected(false);
    }
    
    private void msg(String eingabe) {
        System.out.println("SystByte: "+eingabe);
    }

}


class Fehler {

    public String text;
    public boolean ist;

    Fehler(String text, boolean ist) {
        this.text = text;
        this.ist = ist;
    }
}
