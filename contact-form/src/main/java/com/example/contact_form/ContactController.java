package com.example.contact_form;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/api/contact")
    public String sendContactEmail(@RequestBody ContactForm contactForm) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(contactForm.getEmail());
            message.setTo("saranshraina1@gmail.com"); // Change to your email address
            message.setSubject("Contact Form Submission: " + contactForm.getSubject());
            message.setText("Name: " + contactForm.getName() + "\n\nMessage:\n" + contactForm.getMessage());

            mailSender.send(message);
            return "Message sent successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to send message.";
        }
    }

}
