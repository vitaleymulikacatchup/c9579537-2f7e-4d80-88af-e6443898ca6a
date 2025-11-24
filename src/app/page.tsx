"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { GraduationCap, Users, Award, Globe, BookOpen, Lightbulb, Smile, BookMarked, Rocket, Activity, Palette, Zap, Star, HelpCircle, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="grid"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="India International School"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Programs", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Admissions",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Welcome to India International School"
          description="Empowering minds, nurturing futures. A world-class education for globally-minded learners in a diverse, inclusive community."
          tag="Excellence in Education"
          tagIcon={GraduationCap}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763970255228-dntaqsp3.jpg",
              imageAlt: "Students engaged in classroom learning"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763970255984-af4l5iiy.jpg",
              imageAlt: "Students collaborating and studying together"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763970256793-sax3ohjv.jpg",
              imageAlt: "Modern school campus building"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763970257602-wskaius7.jpg",
              imageAlt: "Students participating in outdoor activities"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763970258393-c68a4yxa.jpg",
              imageAlt: "School library with learning resources"
            }
          ]}
          buttons={[
            {
              text: "Apply Now",
              href: "contact"
            },
            {
              text: "Schedule Tour",
              href: "features"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="India International School: Shaping Tomorrow's Leaders Through Academic Excellence and Character Development"
          metrics={[
            {
              icon: Users,
              label: "Active Students",
              value: "1200+"
            },
            {
              icon: Award,
              label: "Years of Excellence",
              value: "25+"
            },
            {
              icon: Globe,
              label: "Student Nationalities",
              value: "45+"
            },
            {
              icon: BookOpen,
              label: "Expert Faculty Members",
              value: "150+"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Our Educational Programs"
          description="Comprehensive learning pathways designed to develop critical thinking, creativity, and global citizenship"
          tag="Academic Excellence"
          tagIcon={Lightbulb}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              title: "Early Years Program",
              description: "Nurturing young learners through play-based, developmentally appropriate learning experiences that foster curiosity and confidence.",
              icon: Smile
            },
            {
              title: "Primary Education",
              description: "Strong foundation in academics with emphasis on literacy, numeracy, and developing lifelong learning skills in a supportive environment.",
              icon: BookMarked
            },
            {
              title: "Secondary Education",
              description: "Advanced curriculum preparing students for university with IGCSE, IB, and vocational pathways tailored to individual aspirations.",
              icon: Rocket
            },
            {
              title: "Sports & Athletics",
              description: "Dynamic sports programs developing physical fitness, teamwork, and athletic excellence across multiple disciplines and competitions.",
              icon: Activity
            },
            {
              title: "Arts & Culture",
              description: "Enriching programs in visual arts, performing arts, music, and cultural studies nurturing creative expression and artistic development.",
              icon: Palette
            },
            {
              title: "Technology & Innovation",
              description: "Cutting-edge labs with coding, robotics, and digital literacy preparing students for technology-driven futures.",
              icon: Zap
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Voices from Our Community"
          description="Hear from our students, parents, and educators about their India International School experience"
          tag="Student Success"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Aisha Patel",
              role: "Student, Grade 12",
              company: "Science Stream",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763970259769-nknaem0l.jpg"
            },
            {
              id: "2",
              name: "Rajesh Kumar",
              role: "Parent",
              company: "Business Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763970260270-gk7dmi0s.jpg"
            },
            {
              id: "3",
              name: "Dr. Emily Watson",
              role: "Head of Science Department",
              company: "Educator",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763970260955-hpd8a9ui.jpg"
            },
            {
              id: "4",
              name: "Arjun Sharma",
              role: "Student, Grade 10",
              company: "Arts Stream",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763970261664-98a6r5qm.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about admissions, curriculum, facilities, and school life at IIS"
          tag="Help & Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          mediaPosition="left"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763970259065-afxupfs1.jpg"
          imageAlt="School administration and support team"
          faqs={[
            {
              id: "1",
              title: "What is the admission process for India International School?",
              content: "Our admissions process involves an application form submission, entrance assessments in English and Mathematics, a personal interview with our admissions team, and school visit. We review applications on a rolling basis and encourage early applications for better availability."
            },
            {
              id: "2",
              title: "What curriculum does the school follow?",
              content: "We follow the International Baccalaureate (IB) curriculum from Grade 1 onwards, including the Primary Years Programme (PYP), Middle Years Programme (MYP), and Diploma Programme (DP) in senior years. Our curriculum emphasizes holistic development and international mindedness."
            },
            {
              id: "3",
              title: "What are the school fees and payment options?",
              content: "Fees vary by grade level and program. We offer flexible payment plans including annual, semester, and monthly installment options. Scholarship programs are available for deserving students. Please contact our admissions office for detailed fee information."
            },
            {
              id: "4",
              title: "Does the school provide transportation services?",
              content: "Yes, we provide safe and reliable transportation services covering major areas of the city. Our buses are equipped with GPS tracking and trained staff. Families can choose from various transportation zones based on their location."
            },
            {
              id: "5",
              title: "What are the extracurricular activities available?",
              content: "We offer a comprehensive range of activities including sports teams, performing arts, robotics club, debate society, environmental initiatives, and cultural groups. Students are encouraged to participate in at least two activities to develop well-rounded personalities."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          title="Begin Your Journey at India International School"
          description="Ready to join our diverse community of learners? Contact our admissions team today to schedule a campus visit and learn more about our programs."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Get Information"
          termsText="We respect your privacy and will only use your information to send you admissions-related communications."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="IIS"
          copyrightText="© 2025 India International School. All rights reserved."
          columns={[
            {
              title: "School",
              items: [
                { label: "About Us", href: "about" },
                { label: "Academic Programs", href: "features" },
                { label: "Faculty & Staff", href: "#" },
                { label: "Achievements", href: "#" }
              ]
            },
            {
              title: "Admissions",
              items: [
                { label: "Apply Now", href: "contact" },
                { label: "Fees & Scholarships", href: "#" },
                { label: "School Tours", href: "#" },
                { label: "FAQs", href: "faq" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Email Us", href: "#" },
                { label: "Call: +91 (0) XXXX-XXXX", href: "#" },
                { label: "Campus Address", href: "#" },
                { label: "Office Hours", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}