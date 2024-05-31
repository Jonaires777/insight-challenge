package com.application.backend.exceptions;

public class DbException extends RuntimeException {
    public DbException(String msg) {
        super(msg);
    }
}
