package io.ionic.starter;
import com.getcapacitor.community.barcode.BarcodeScanner;
import com.getcapacitor.community.barcode.BarcodeScannerPlugin;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {{
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        registerPlugin(BarcodeScannerPlugin.class);
    }
}
