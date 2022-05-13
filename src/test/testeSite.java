import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteLoginGeometrica {
	private WebDriver driver;
	
	@Before 
	public void abrirNavegador() {
		System.setProperty("webdriver.chrome.driver", "C:\\Arquivos de Programas\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://localhost:4200/login");
		driver.manage().window().maximize(); //pra abrir  a tela de forma maximizada//
	};
	
	@Test
	public void testeNavegador() {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
		WebElement inputEmail=  driver.findElement(By.id("email"));
		WebElement inputSenha=  driver.findElement(By.id("password"));
		WebElement botaoEnviar= driver.findElement(By.id("entrar"));
		
	
		
		String[] listaSenhas = {"senhaum","senhaErrada", "errouDeNovo", "sanduba123"};
		for (int tentativas = 0; tentativas < listaSenhas.length; tentativas++) {
			try {
			inputEmail.clear();	
			inputSenha.clear();
			
			inputEmail.sendKeys("sanduba@email.com");
			inputSenha.sendKeys(listaSenhas[tentativas]);
			botaoEnviar.click();
			
			Thread.sleep(3000);
			
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
		}
	}