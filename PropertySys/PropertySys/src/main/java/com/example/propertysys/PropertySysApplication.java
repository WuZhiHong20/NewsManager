package com.example.propertysys;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//扫描包
@ComponentScan(basePackages = "wyxt")
@MapperScan("wyxt.mapper")
@EntityScan("wyxt.model")
public class PropertySysApplication
{

    public static void main(String[] args) {
        SpringApplication.run(PropertySysApplication.class, args);
    }

}
