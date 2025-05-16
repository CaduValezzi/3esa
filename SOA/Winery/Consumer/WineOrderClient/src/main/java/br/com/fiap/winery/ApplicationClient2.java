package br.com.fiap.winery;

import

import javax.xml.namespace.QName;
import jakarta.xml.ws.Service;
import java.net.URL;

public class ApplicationClient2 {
    public static void main(String[] args) throws Exception {
        // Acesso ao serviço WineStockService
        URL url1 = new URL("http://localhost:8085/WineStockService?wsdl");
        QName qName1 = new QName("http://winery.fiap.com.br/", "WineStockServiceImplementationService");
        Service service1 = Service.create(url1, qName1);
        WineStockService wineStockService = service1.getPort(WineStockService.class);
        String order = wineStockService.placeOrder("Cabernet", 2);
        System.out.println("Resposta do pedido: " + order);

        // 58–62. Acesso ao serviço WineWarningService
        URL url2 = new URL("http://localhost:8086/WineWarningService?wsdl");
        QName qName2 = new QName("http://winery.fiap.com.br/", "WineWarningServiceImplementationService");
        Service service2 = Service.create(url2, qName2);
        WineWarningService wineWarningService = service2.getPort(WineWarningService.class);
        String warn = wineWarningService.sendWarn();
        System.out.println("Alerta: " + warn);
    }
}
