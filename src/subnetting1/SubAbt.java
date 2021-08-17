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
class SubAbt {

    String name;
    int clients;
    String ip;
    int cdir;

    SubAbt(String name, int clients) {
        this.name = name;
        this.clients = clients;
    }

    public String toStringkurz() {
        return name + ", " + clients + " Clients";
    }
}
