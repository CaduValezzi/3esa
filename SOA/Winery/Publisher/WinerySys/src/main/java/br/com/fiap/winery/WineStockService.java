package br.com.fiap.winery;


import jakarta.jws.WebService;
import jakarta.jws.soap.SOAPBinding;
import jakarta.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.DOCUMENT)

public interface WineStockService {
    public String getMenu();
    public String placeOrder(String name,int quantity);


}
