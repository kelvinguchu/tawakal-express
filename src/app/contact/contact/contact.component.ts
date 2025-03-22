import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconsModule } from '../../shared/font-awesome.module';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

// Contact form data structure
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FontAwesomeIconsModule,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;

  // Icon sizes
  smallIconSize: SizeProp = 'sm';
  mediumIconSize: SizeProp = 'lg';

  getIconName(iconName: string): string {
    const nameWithoutPrefix = iconName.substring(2);
    return nameWithoutPrefix
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase();
  }

  // Form data
  contactData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  // Form state
  isLoading: boolean = false;
  isSubmitted: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;

  // FAQ items with icons
  faqItems = [
    {
      question: 'How do I send money with Tawakal Express?',
      answer:
        'To send money, visit any of our agent locations with a valid ID, fill out a transfer form, pay the amount plus fees, and receive a transaction number to share with your recipient.',
      icon: 'faMoneyBill',
    },
    {
      question: 'What identification do I need to send or receive money?',
      answer:
        "You need a government-issued photo ID such as a passport, driver's license, or national ID card. For receiving, you'll also need the transaction number.",
      icon: 'faIdCard',
    },
    {
      question: 'How long does a transfer take?',
      answer:
        'Most transfers are available for pickup within minutes after being sent, depending on the destination and operating hours of the receiving location.',
      icon: 'faClock',
    },
    {
      question: 'Is my money transfer secure?',
      answer:
        'Yes, we use advanced security protocols to protect all transactions. Each transfer has a unique tracking number that only the sender and recipient should know.',
      icon: 'faShieldHalved',
    },
    {
      question: 'How do I track my money transfer?',
      answer:
        'You can track your transfer using the transaction number provided at the time of sending. Contact our customer service with this number for updates.',
      icon: 'faInfoCircle',
    },
    {
      question: 'How do I become an agent for Tawakal Express?',
      answer:
        'To become an agent, please contact our business development team at partnerships@tawakal.net with your business details and location.',
      icon: 'faUsers',
    },
  ];

  // Submit contact form
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
