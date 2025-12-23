import React from 'react';
import { Section } from '../components/ui/Section';

export const PrivacyPolicy: React.FC = () => (
  <Section>
    <div className="max-w-3xl mx-auto prose prose-slate">
      <h1 className="text-3xl font-bold font-heading mb-8">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">At JainPackwell, we respect your privacy and are committed to protecting it through our compliance with this policy.</p>
      <h3 className="text-xl font-bold mt-8 mb-4">Information We Collect</h3>
      <p className="mb-4">We collect information that you provide directly to us when you fill out a contact form, apply for a job, or communicate with us.</p>
      <h3 className="text-xl font-bold mt-8 mb-4">How We Use Your Information</h3>
      <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information.</p>
    </div>
  </Section>
);

export const TermsOfService: React.FC = () => (
  <Section>
    <div className="max-w-3xl mx-auto prose prose-slate">
      <h1 className="text-3xl font-bold font-heading mb-8">Terms of Service</h1>
      <p className="mb-4">Please read these Terms of Service carefully before using the JainPackwell website.</p>
      <h3 className="text-xl font-bold mt-8 mb-4">Acceptance of Terms</h3>
      <p className="mb-4">By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
      <h3 className="text-xl font-bold mt-8 mb-4">Intellectual Property</h3>
      <p className="mb-4">The Service and its original content, features, and functionality are and will remain the exclusive property of JainPackwell Pvt. Ltd. and its licensors.</p>
    </div>
  </Section>
);