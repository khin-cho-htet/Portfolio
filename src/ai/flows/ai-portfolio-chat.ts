'use server';
/**
 * @fileOverview An AI assistant for Khin Cho Htet's portfolio.
 *
 * - aiPortfolioChat - A function that handles recruiter questions about Khin's experience.
 * - AIPortfolioChatInput - The input type for the aiPortfolioChat function.
 * - AIPortfolioChatOutput - The return type for the aiPortfolioChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const KhinCV = `KHIN CHO HTET

Business Analyst

Mandalay, Myanmar | khinchohtet15@gmail.com | +959 789841900| linkedin.com/in/khin-cho-htet/

PROFESSIONAL SUMMARY

Business Analyst with 3+ years of experience in ERP and software implementation projects across microfinance, banking, and multi-industry environments. Strong expertise in customer requirements analysis, ERP solution design, project management, and end-to-end implementation. Experienced in working as a single point of contact for clients, performing gap analysis, supporting system configuration, go-live, and post-implementation activities. Hands-on experience with financial systems, customer-facing applications, and enterprise platforms including loan origination, POS, audit, and risk management systems. Fluent in English with excellent analytical and communication skills.

PROJECT & DOMAIN EXPERIENCE

Financial & Enterprise Systems

- Core Banking System
- Loan Origination System (LOS)
- Customer-Facing Loan Application
- Call Center Management System
- Human Resource Management (HRM) Software
- Electronic Asset Management System
- Point of Sale (POS) Software
- Audit Management System
- Risk Management System

Business & Digital Platforms

- Hotel Management System
- Learning Management System (LMS)
- Online Bookstore Platform
- Reader / Digital Content Management Platform

WOR K EXPERIENCE

Senior Business Analyst

Alliance Microfinance Myanmar | Mandalay, Myanmar June 2024 - Present

- Acted as the single point of contact between business users, internal IT teams, and international software vendors
- Analyzed customer and internal user needs and proposed ERP-based solutions aligned with business processes
- Prepared and maintained Business Requirements Documents (BRD), Functional Specifications (FSD), and Software Requirements Specifications (SRS)
- Managed the end-to-end project lifecycle, including scope definition, sprint planning, timelines, and delivery milestones
- Applied Agile methodology and Scrum framework, including backlog grooming, sprint planning, sprint reviews, and daily stand-ups
- Coordinated User Acceptance Testing (UAT) with end users and ensured defects were tracked and resolved before go-live
- Supported system configuration, functional validation, and end-user training to ensure smooth adoption
- Worked closely with developers to execute business requirements, clarify user stories, and deliver system enhancements

Business Analyst

Digital Base Software Company Limited | Yangon, Myanmar Nov 2022 - May 2024

- Conducted pre-sales requirement discovery meetings with clients to understand business needs and propose suitable solutions in collaboration with sales and marketing teams
- Gathered and analyzed post-sales business requirements across multiple industries to support solution implementation
- Prepared project contracts and supporting documentation based on agreed scope, deliverables, and timelines
- Supported pre-sales and post-sales activities, including requirement clarification, solution feasibility assessment, and client communication
- Estimated project budgets and developed implementation schedules to ensure timely delivery
- Coordinated cross-functional teams including design, development, and testing throughout the project lifecycle
- Created test cases and UAT scenarios aligned with functional requirements and business processes
- Led and facilitated testing and UAT sessions with internal teams and end users
- Delivered end-user training to support system adoption and effective usage
- Provided post go-live support, addressing user issues and ensuring system stability
- Ensured successful project delivery and high customer satisfaction

Junior Web Developer

Nexcode Software Company Limited | Yangon, Myanmar Nov 2021 - Dec 2022

- Worked closely with Business Analysts, designers, and stakeholders to translate business requirements into functional system features
- Supported implementation of user-facing modules using HTML, CSS, and JavaScript
- Designed and developed CMS-based websites, supporting content management and client customization needs
- Assisted in requirements clarification and functional discussions to ensure alignment with business objectives
- Gained strong understanding of the software development lifecycle (SDLC) and customer-driven solution delivery
- Collaborated in an Agile development environment, participating in team discussions and iterative improvements

EDUCATION

Bachelor of Science (Computer Science)

Yadanabon University| Mandalay, Myanmar Graduated : 2019

Web Development by Doing HTML/ CSS

Udemy Completed : 2019

Python Course

Turing Programming Training Center Completed : 2021

React Course

Turing Programming Training Center Completed : 2022

SKILLS

- Business Analysis & Requirements Engineering
- ERP Implementation & Functional Consulting
- BRD, FSD, SRS Documentation
- Requirements Gathering & Functional Analysis
- Business Process Mapping & Gap Analysis
- Project Management & End-to-End Delivery
- Scope, Timeline & Milestone Management
- Agile Methodology & Scrum Framework
- Sprint Planning, Backlog Grooming & SDLC
- Stakeholder & Client Management (SPOC)
- User Acceptance Testing (UAT)
- Test Case Design, Validation & Defect Tracking
- System Configuration & Functional Validation
- Go-Live & Post-Implementation Support
- End-User Training & Change Management
- Pre-Sales & Post-Sales Support
- Cross-Functional Collaboration
- Financial, Audit & Risk-Related Systems
- CRM, Inventory, Accounting & POS Systems
- Web Applications, HTML, CSS, JavaScript

CERTIFICATIONS

- Google Project Management (Coursera)
- Business Management & Administration (Strategy First University)
- Career Essentials in Business Analysis by Microsoft and LinkedIn
- Business Management & Administration (INSTITUTE OF COMMERCIAL MANAGEMENT)
- Agile Project Management (Coursera)

LANGUAGES

English : Fluent
Burmese : Native`;

const AIPortfolioChatInputSchema = z.object({
  question: z.string().describe("A recruiter's question about Khin's experience."),
});
export type AIPortfolioChatInput = z.infer<typeof AIPortfolioChatInputSchema>;

const AIPortfolioChatOutputSchema = z.object({
  answer: z.string().describe("A tailored answer or summary based on Khin's CV."),
});
export type AIPortfolioChatOutput = z.infer<typeof AIPortfolioChatOutputSchema>;

export async function aiPortfolioChat(input: AIPortfolioChatInput): Promise<AIPortfolioChatOutput> {
  return aiPortfolioChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPortfolioChatPrompt',
  input: {
    schema: AIPortfolioChatInputSchema.extend({
      cv: z.string(),
    }),
  },
  output: {schema: AIPortfolioChatOutputSchema},
  prompt: "You are an AI assistant for Khin Cho Htet's professional portfolio. Your role is to answer questions from recruiters about Khin's experience, skills, and projects, providing concise and tailored information based only on the provided CV. Do not invent information. If the answer is not in the CV, state that you cannot find the information.\n\nKhin Cho Htet's CV:\n\n---\n{{{cv}}}\n---\n\nRecruiter's Question: {{{question}}}"
});

const aiPortfolioChatFlow = ai.defineFlow(
  {
    name: 'aiPortfolioChatFlow',
    inputSchema: AIPortfolioChatInputSchema,
    outputSchema: AIPortfolioChatOutputSchema,
  },
  async input => {
    const {output} = await prompt({
      ...input,
      cv: KhinCV,
    });
    return output!;
  }
);
