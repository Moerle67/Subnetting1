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
public class StartFenster extends javax.swing.JFrame {

    /**
     * Creates new form StartFenster
     */
    public StartFenster() {
        initComponents();
        this.setLocationRelativeTo(null);
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jButtonSubnett = new javax.swing.JButton();
        jButtonZahlensyst = new javax.swing.JButton();
        jButtonNetz = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jButtonSubnett.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jButtonSubnett.setText("Subnetting");
        jButtonSubnett.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonSubnettActionPerformed(evt);
            }
        });

        jButtonZahlensyst.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jButtonZahlensyst.setText("Zahlensysteme");
        jButtonZahlensyst.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonZahlensystActionPerformed(evt);
            }
        });

        jButtonNetz.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jButtonNetz.setText("Netzbegrenzung");
        jButtonNetz.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonNetzActionPerformed(evt);
            }
        });

        jLabel1.setFont(new java.awt.Font("Tahoma", 0, 24)); // NOI18N
        jLabel1.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel1.setText("Netzwerktechnik");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jLabel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jButtonSubnett, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jButtonNetz, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jButtonZahlensyst, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGap(32, 32, 32)
                .addComponent(jButtonZahlensyst)
                .addGap(42, 42, 42)
                .addComponent(jButtonNetz)
                .addGap(38, 38, 38)
                .addComponent(jButtonSubnett)
                .addGap(34, 34, 34))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jButtonSubnettActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonSubnettActionPerformed
        FensterSubnetting fenster2 = new FensterSubnetting();
        fenster2.show();         // TODO add your handling code here:
    }//GEN-LAST:event_jButtonSubnettActionPerformed

    private void jButtonNetzActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonNetzActionPerformed
        FensterNetzGrenzen fenster1;
        fenster1 = new FensterNetzGrenzen();
        fenster1.setLocationRelativeTo(null);
        fenster1.show();        fenster1.show();    }//GEN-LAST:event_jButtonNetzActionPerformed

    private void jButtonZahlensystActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonZahlensystActionPerformed
        FensterZahlensyteme fenster3 = new FensterZahlensyteme();
        fenster3.show();       
    }//GEN-LAST:event_jButtonZahlensystActionPerformed

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
            java.util.logging.Logger.getLogger(StartFenster.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(StartFenster.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(StartFenster.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(StartFenster.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new StartFenster().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButtonNetz;
    private javax.swing.JButton jButtonSubnett;
    private javax.swing.JButton jButtonZahlensyst;
    private javax.swing.JLabel jLabel1;
    // End of variables declaration//GEN-END:variables
}
