# Spring Boot

---
## Annotations

### 1. @Component
The @Component annotation indicates that an annotated class is a "Spring Bean / Component".

The @Component annotation tells Spring Container to automatically create Spring Bean.


### 2. @Autowired
The @Autowired annotation is used to inject the Bean automatically.

The @Autowired annotation is used in constructor injection, setter injection and field injection.


### 3. @Qualifier
The @Qualifier annotation is used in conjunction with Autowired to avoid confusion when we have two or more Beans configured for the same type.


### 4. @Primary
The @Primary annotation to give higher preference to a Bean when there are multiple Bean of the same type.


### 5. @Bean
The @Bean annotation indicates that a methods produced a Bean to be managed by the **Spring Container**. The @Bean annotation is usually declared in Configuration class to create Spring Bean definitions.

By default, the Bean name is same as **method name**. We can specify Bean name using **@Bean(name="beanName")**.

@Bean annotation provides **initMethod** and **destroyMethod** attributes to perform certain actions Bean initialization or before Bean destruction by a container.


## Stereotype Annotations
1. These annotation are used to create Spring Bean automatically in the application context (Spring IOC Container).
2. The main stereotype annotation is **@Component**.
3. By using this annotation, Spring provides more Stereotype meta annotation such as **@Service**, **@Repository** and **@Controller**.
4. **@Service** annotation is used to create Bean at the Service layer.
5. **@Repository** is used to create Spring Beans for the repositories at the DAO(Data Access Object) layer.
6. **@Controller** is used to create Spring Beans at the controller layer.


---