package br.com.fiap.winery;

import jakarta.jws.WebService;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@WebService(endpointInterface = "br.com.fiap.winery.WineStockService")
public class WineStockServiceImplementation implements WineStockService{
    @Override
    public String getMenu() {

        Vinho vinho1 = new Vinho();
        vinho1.setId(1);
        vinho1.setNome("vinho 1");
        vinho1.setPreco(BigDecimal.valueOf(Long.parseLong("10")));
        vinho1.setTipodeuva("branca");

        Vinho vinho2 = new Vinho();
        vinho2.setId(2);
        vinho2.setNome("vinho2");
        vinho2.setPreco(BigDecimal.valueOf(Long.parseLong("20")));
        vinho2.setTipodeuva("roxa");

        List<String> menuVinhos = new ArrayList<>();
        menuVinhos.add(String.valueOf(vinho1));
        menuVinhos.add(String.valueOf(vinho2));



        return menuVinhos.toString();
    }

    @Override
    public String placeOrder(String name, int quantity) {

        return null;
    }
}
