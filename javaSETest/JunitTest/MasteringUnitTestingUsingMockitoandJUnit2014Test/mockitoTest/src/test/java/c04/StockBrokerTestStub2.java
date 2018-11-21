package c04;

import c04.dto.Stock;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.math.BigDecimal;

import static org.junit.Assert.assertNotNull;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.isA;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class StockBrokerTestStub2 {
    @Mock
    MarketWatcher marketWatcher;

    @Mock
    Portfolio portfolio;

    StockBroker broker;

    @Before
    public void setUp() throws Exception {
        broker = new StockBroker(marketWatcher);
    }

    @Test
    public void when_ten_percent_gain_then_the_stock_is_sold() {
        //Portfolio's getAvgPrice is stubbed to return $10.00
        when(portfolio.getAvgPrice(isA(Stock.class)))
                .thenReturn(new BigDecimal("10.00"));
        //A stock object is created with current price $11.20
        Stock aCorp = new Stock("A", "A Corp", new BigDecimal("11.20"));
        //getQuote method is stubbed to return the stock
        when(marketWatcher.getQuote(anyString())).thenReturn(aCorp);
        //perform method is called, as the stock price increases
        // by 12% the broker should sell the stocks
        broker.perform(portfolio, aCorp);
        //verifying that the broker sold the stocks
        verify(portfolio).sell(aCorp, 10);
    }
}