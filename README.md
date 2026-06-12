# Automated Lead Management System (LMS)

A centralized Lead Management System (LMS) built using the MERN Stack that automatically collects, organizes, assigns, and analyzes leads from multiple sources including Website Forms, Meta Ads (Facebook & Instagram), and Google Ads.

live - https://lead-management-sustem.vercel.app/
video explanition - https://drive.google.com/file/d/1mPuoXD_VDDlJtZ3DfuhZLSnHUvyI3i8N/view?usp=sharing

## 🚀 Features

### 🔐 Authentication & Authorization

* JWT-based Authentication
* Secure Login & Logout
* Protected Routes
* Role-Based Access Control

---

## 📋 Leads Management

The system maintains a centralized lead repository with three lead sources:

### 1. Website Leads

Manage leads generated through website inquiry forms.

#### Filters

* Service Type

  * Web Development
  * Mobile App Development
  * UI/UX Design
  * SEO
  * Digital Marketing

#### Features

* Search Leads
* Filter by Service
* Assign Lead to Employee
* View Lead Details

---

### 2. Meta Ads Leads

Manage leads generated from Facebook and Instagram campaigns.

#### Filters

##### Campaign

* Summer Sale
* Festival Offer
* Developer Hiring
* Student Outreach

##### Platform

* Facebook
* Instagram

#### Features

* Search Leads
* Filter by Campaign
* Filter by Platform
* Assign Lead to Employee
* View Lead Details

---

### 3. Google Ads Leads

Manage leads generated from Google Ads campaigns.

#### Filters

##### Campaign

* Summer Sale
* Festival Offer
* Developer Hiring
* Student Outreach

##### Keywords

* Web Development
* Mobile App Development
* UI/UX Design
* SEO
* Digital Marketing

#### Features

* Search Leads
* Filter by Campaign
* Filter by Keyword
* Assign Lead to Employee
* View Lead Details

---

## 👨‍💼 Employee Management

Manage employees and their assigned leads.

### Employee List

* View All Employees
* View Assigned Leads Count
* Search Employees

### Add Employee

* Add New Employee
* Store Employee Information
* Send Automated Onboarding Email

### Employee Lead Assignment

* Assign Leads from Any Source
* View Employee-wise Lead Distribution

---

## 📌 Assigned Leads

A dedicated section for viewing all assigned leads across all lead sources.

### Filters

#### Source

* Website
* Meta Ads
* Google Ads

### Features

* Search Assigned Leads
* Filter by Source
* View Assigned Employee
* Track Lead Allocation

---

## 📊 Analytics Dashboard

Real-time analytics and reporting dashboard.

### KPI Cards

* Total Leads
* Website Leads
* Meta Leads
* Google Leads

### Charts

#### Lead Source Distribution

Bar Chart displaying:

* Website Leads Count
* Meta Leads Count
* Google Leads Count

### Insights

* Lead Source Performance
* Lead Distribution Overview
* Employee Assignment Summary

---

## 🔄 Automated Lead Synchronization

The system automatically fetches leads from Mockaroo APIs.

### Data Sources

* Website Leads API
* Meta Ads Leads API
* Google Ads Leads API

### Automation

* Cron Job executes every 2 hours
* Fetches latest lead data
* Stores new leads in MongoDB
* Prevents duplicate records

### Employee Notifications

After every successful synchronization:

* Insight email is sent to all employees
* Includes updated lead statistics and source-wise breakdown

---

## 📧 Email Notifications

### Onboarding Email

Sent automatically when a new employee is added.

### Insight Email

Sent automatically after every lead synchronization process.

Contents:

* Total Leads
* Website Leads
* Meta Leads
* Google Leads
* Latest Lead Insights

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Recharts

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)

### Scheduling

* Node Cron

### Email Service

* Nodemailer

### API Integration

* Mockaroo API

### State Management

* React Context API


## 📈 Workflow

1. Cron Job runs every 2 hours.
2. Leads are fetched from Mockaroo APIs.
3. Data is stored in MongoDB.
4. Employees receive insight emails.
5. Admin reviews leads from Website, Meta Ads, and Google Ads.
6. Leads are assigned to employees.
7. Employees follow up with assigned leads.
8. Analytics dashboard updates automatically.

---

## 🎯 Key Benefits

* Centralized Lead Management
* Automated Lead Collection
* Employee Lead Assignment
* Advanced Search & Filtering
* Real-Time Analytics
* Automated Email Notifications
* Secure JWT Authentication
* Scalable MERN Architecture

---

## 👨‍💻 Built With

* MongoDB
* Express.js
* React.js
* Node.js
* JWT Authentication
* Node Cron
* Nodemailer
* Mockaroo API
