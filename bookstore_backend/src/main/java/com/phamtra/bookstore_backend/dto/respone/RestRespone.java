package com.phamtra.bookstore_backend.dto.respone;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RestRespone<T> {

    private int statusCode;
    private String error;

    private Object message;
    private T data;

    @JsonProperty("totalItem")
    private long totalItem;
    @JsonProperty("totalPage")
    private int totalPage;

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public Object getMessage() {
        return message;
    }

    public void setMessage(Object message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public long getTotalItem() {
        return totalItem;
    }

    public void setTotalItem(long totalItem) {
        this.totalItem = totalItem;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }
}
