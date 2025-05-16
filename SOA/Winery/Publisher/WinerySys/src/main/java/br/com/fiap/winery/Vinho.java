package br.com.fiap.winery;

import java.math.BigDecimal;

public class Vinho {
    private int id;
    private String nome;
    private BigDecimal preco;
    private String tipodeuva;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public String getTipodeuva() {
        return tipodeuva;
    }

    public void setTipodeuva(String tipodeuva) {
        this.tipodeuva = tipodeuva;
    }
}
