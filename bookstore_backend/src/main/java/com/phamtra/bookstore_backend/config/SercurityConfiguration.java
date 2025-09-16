package com.phamtra.bookstore_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity(securedEnabled = true)
public class SercurityConfiguration {

    @Bean //ghi đè, cấu hình mặc định
    public PasswordEncoder passwordEncoder() { //mã hóa
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception { //cấu hình security

//        String[] whiteList = {
//                "/",
//                "/api/v1/auth/login", "/api/v1/auth/refresh", "api/v1/auth/register",
//                "/storage/**"
//        };

        http
                .csrf(c -> c.disable())
                .cors(Customizer.withDefaults()); //cấu hình mặc định lỗi cors
//                .authorizeHttpRequests(
//                        authz -> authz
//                                .requestMatchers(whiteList).permitAll()
//                                .requestMatchers(HttpMethod.GET, "/api/v1/companies").permitAll()
//                                .requestMatchers(HttpMethod.GET, "/api/v1/jobs").permitAll()
//                                .requestMatchers(HttpMethod.GET, "/api/v1/skills").permitAll()
//                                .anyRequest().authenticated())
//                .oauth2ResourceServer((oauth2) -> oauth2.jwt(Customizer.withDefaults())
//                        .authenticationEntryPoint(customAuthenicationEntryPoint)
//                )
        //lỗi ngoại lệ
//                .exceptionHandling(
//                        exceptions -> exceptions
//                                .authenticationEntryPoint(new BearerTokenAuthenticationEntryPoint()) //401
//                                .accessDeniedHandler(new BearerTokenAccessDeniedHandler())) //403

//                .formLogin(f -> f.disable())
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        return http.build();
    }
}
