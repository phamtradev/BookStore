package com.phamtra.bookstore_backend.util;

import com.phamtra.bookstore_backend.dto.respone.RestRespone;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.MethodParameter;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;


@ControllerAdvice
public class FormatRestRespone implements ResponseBodyAdvice<Object> {
    @Override
    public boolean supports(MethodParameter returnType, Class converterType) {
        return true;
    }

    @Override
    public Object beforeBodyWrite(Object body,
                                  MethodParameter returnType,
                                  MediaType selectedContentType,
                                  Class selectedConverterType,
                                  ServerHttpRequest request,
                                  ServerHttpResponse response) {
        HttpServletResponse servletResponse = ((ServletServerHttpResponse) response).getServletResponse();
        int status = servletResponse.getStatus();

        // Nếu đã là RestRespone thì không bọc lại nữa
        if (body instanceof RestRespone) {
            return body;
        }

        RestRespone<Object> res = new RestRespone<>();
        res.setStatusCode(status);

        if (status >= 400) {
            return body;
        } else {
            // Nếu body là Page thì lấy content, totalItem, totalPage
            if (body instanceof Page<?> page) {
                res.setData(page.getContent());
                res.setTotalItem(page.getTotalElements());
                res.setTotalPage(page.getTotalPages());
            } else {
                res.setData(body);
            }
            res.setMessage("CALL API SUCCESS");
        }
        return res;
    }
}