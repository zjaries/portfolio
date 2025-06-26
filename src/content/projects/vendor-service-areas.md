---
title: "Wreno Vendor Service Areas & Find Vendors"
stack:
  - title: "TypeScript"
    href: "https://www.typescriptlang.org/"
  - title: "Node.js"
    href: "https://nodejs.org/en"
  - title: "React"
    href: "https://react.dev/"
  - title: "PostgreSQL"
    href: "https://www.postgresql.org/"
  - title: "GeoJSON"
    href: "https://geojson.org/"
  - title: "GCP"
    href: "https://cloud.google.com/"
image: "images/projects/find-vendors.png"
thumbnail: "images/projects/vendor-service-area.png"
description: "A geospatial matching system that connects Vendors to projects based on service area coverage using PostGIS, GeoJSON, and Google Places. Enables accurate Vendor discovery, market filtering, and regional search in Wreno's Find Vendors tool."
---

## Overview

Wreno’s **Vendor Service Area** system allows Property Managers to discover Vendors based on geographic coverage — filtering by state, county, city, or even custom regions. Vendors define where they operate, and our system intelligently matches them to projects and compliance workflows.

This feature dramatically improved Vendor discoverability and opened up new layers of automation across our platform — from onboarding to compliance targeting.

---

## System Design & Architecture

We needed a geospatial solution that was both accurate and scalable. After researching multiple options — including building a full U.S. location hierarchy from U.S. Census TIGER/Line shapefiles — we ultimately integrated **Boundaries.io**, which provided the precision and performance we needed without heavy maintenance overhead.

On the backend, we used:

- **PostGIS** on top of **PostgreSQL** for advanced spatial queries
- **GeoJSON** to store and transmit Vendor service areas
- **Google Places API** for location autocomplete and geocoding
- **Boundaries.io** to resolve cities, counties, and zip codes to shapes

The frontend leveraged React and dynamic filtering to let users explore by region, while backend controllers handled spatial lookups to find Vendors operating within the target area.

---

## Key Features

### 📍 Spatial Matching

We used PostGIS functions like `ST_Contains` and `ST_Intersects` to determine which Vendors covered a given location. This enabled:

- Matching Vendors to projects by market, city, or zip code
- Quickly filtering out Vendors outside a project’s service area
- Ensuring that Property Managers only see Vendors where they operate

### 🔍 Vendor Discovery

Property Managers can now filter and sort Vendors not just by credentials and performance — but by where they actually do work. This opened up huge gains in accuracy and usability across our Vendor search experience.

### 🌐 Flexible Geodata Input

Vendors can define service areas in a variety of ways:

- Cities, states, or counties (resolved via Boundaries.io)
- Zip codes
- Custom shapes (GeoJSON polygons)

This flexibility helped us support both small local providers and national operators with complex footprints.

---

## Results & Outcomes

- Dramatically improved Vendor discovery accuracy across the platform
- Unlocked geographic filters for internal tools and workflows
- Enabled downstream use in matching, compliance, and reporting systems
- Simplified onboarding for large Vendors with complex service footprints
- Created reusable geospatial patterns for future Wreno features

---

## Role & Contributions

I led the research, architecture, and implementation of the Vendor Service Area system. I explored building our own U.S. location hierarchy using Census TIGER/Line shapefiles, evaluated multiple Vendors, and selected **Boundaries.io** for production use.

I implemented both frontend and backend components — from React search interfaces to PostGIS-powered spatial queries and GeoJSON handling. I also became the internal go-to expert on geospatial data at Wreno, and helped integrate this functionality into other parts of the app such as Vendor targeting and compliance workflows.

The system has been a foundational upgrade to our Vendor platform and continues to power multiple search and matching features today.
