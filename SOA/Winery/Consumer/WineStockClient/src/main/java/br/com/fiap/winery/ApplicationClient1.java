package br.com.fiap.winery;

import br.com.fiap.winestockclient.stub.WineStockService;
import br.com.fiap.winestockclient.stub.WineStockServiceImplementation;

import javax.xml.namespace.QName;
import jakarta.xml.ws.Service;
import java.net.URL;

public class ApplicationClient1 {
    public static void main(String[] args) throws Exception {
        // 27. Instanciar URL
        URL url = new URL("http://localhost:8085/WineStockService?wsdl");

        // 28. Instanciar QName
        QName qName = new QName("http://winery.fiap.com.br/", "WineStockServiceImplementationService");

        // 29. Criar Service
        Service service = Service.create(url, qName);

        // 30. Obter proxy para o serviço
        WineStockService wineStockService = service.getPort(WineStockService.class);

        // 31. Chamar getMenu e imprimir o resultado
        String menu = wineStockService.getMenu();
        System.out.println("Menu de vinhos: " + menu);
    }
}
