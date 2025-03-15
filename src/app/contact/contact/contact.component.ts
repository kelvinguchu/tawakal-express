import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faQuestionCircle,
  faMoneyBillTransfer,
  faShieldAlt,
  faUserPlus,
  faCircleInfo,
  faIdCard,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // FontAwesome icons
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faClock = faClock;
  faQuestionCircle = faQuestionCircle;
  faMoneyBillTransfer = faMoneyBillTransfer;
  faShieldAlt = faShieldAlt;
  faUserPlus = faUserPlus;
  faCircleInfo = faCircleInfo;
  faIdCard = faIdCard;
  faMessage = faMessage;

  // FAQ items
  faqItems = [
    {
      question: 'How do I send money with Tawakal Express?',
      answer:
        'To send money, visit any of our agent locations with a valid ID, fill out a transfer form, pay the amount plus fees, and receive a transaction number to share with your recipient.',
      icon: faMoneyBillTransfer,
    },
    {
      question: 'What identification do I need to send or receive money?',
      answer:
        "You need a government-issued photo ID such as a passport, driver's license, or national ID card. For receiving, you'll also need the transaction number.",
      icon: faIdCard,
    },
    {
      question: 'How long does a transfer take?',
      answer:
        'Most transfers are available for pickup within minutes after being sent, depending on the destination and operating hours of the receiving location.',
      icon: faClock,
    },
    {
      question: 'Is my money transfer secure?',
      answer:
        'Yes, we use advanced security protocols to protect all transactions. Each transfer has a unique tracking number that only the sender and recipient should know.',
      icon: faShieldAlt,
    },
    {
      question: 'How do I track my money transfer?',
      answer:
        'You can track your transfer using the transaction number provided at the time of sending. Contact our customer service with this number for updates.',
      icon: faCircleInfo,
    },
    {
      question: 'How do I become an agent for Tawakal Express?',
      answer:
        'To become an agent, please contact our business development team at partnerships@tawakal.net with your business details and location.',
      icon: faUserPlus,
    },
  ];

  @ViewChild('contactForm') contactForm!: NgForm;

  contactData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isLoading: boolean = false;
  isSubmitted: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;

  submitForm(): void {
    this.isSubmitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      // In a real application, you would call an API service here
      console.log('Form submitted:', this.contactData);

      this.isLoading = false;
      this.isSuccess = true;
      this.isError = false;

      // Reset form after successful submission
      this.contactForm.resetForm();
      this.isSubmitted = false;

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.isSuccess = false;
      }, 5000);
    }, 1500);
  }
}
