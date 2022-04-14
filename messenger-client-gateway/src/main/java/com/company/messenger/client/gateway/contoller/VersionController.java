package com.company.messenger.client.gateway.contoller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.company.messenger.client.gateway.api.VersionApi;
import com.company.messenger.client.gateway.model.Version;

@RestController
public class VersionController implements VersionApi {

    @Override
    public ResponseEntity<Version> getVersion() {
        return ResponseEntity.ok(new Version().version("0.0.1"));
    }

}
