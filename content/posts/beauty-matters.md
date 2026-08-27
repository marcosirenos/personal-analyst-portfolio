---
title: "Beauty Matters — A Junior Analyst Learning"
date: "2026-05-12"
tags: [Power BI, Data, Career]
excerpt: "Nobody tells you this in college: an ugly dashboard won't survive a sprint."
readingTime: "6 min read"
---

# Nobody Tells You This in College

You spent hours modeling the data, the ETL is clean, the metrics add up, the DAX worked on the first try (lies, the tenth). Then you open Power BI, throw everything on the screen and ship it.

And your manager stares at it for 30 seconds and says: “I don’t get it.”

Welcome to the club. I’ve been there, and you probably will be too. The good news is there’s a fix. The bad news is the fix requires accepting something engineering school never taught you: **beauty matters**.

## The classic junior analyst mistake

After spending so much time extracting and transforming data, it’s easy to get carried away when you finally reach the visualization stage. So much data, so many ideas, and suddenly you’ve built a seven-headed monster. Even if every visual is useful, the user will pick one or two favorites and the rest just gets in the way.

The problem is that we confuse complexity with quality. The more visuals, filters, and pages, the more it feels like you worked hard. But that’s not how the person using it sees it.

## How I learned the hard way

At RIC, I built a commercial productivity dashboard based on our CRM. The goal was simple: managers monitoring their teams visually, every day. What I delivered was something else entirely: every level of visualization, pages and subpages, filters of every kind, and complex market logic that was hard to adapt. Like killing an ant with a tank.

The result came fast: low adoption, a fragile dashboard that broke easily, and most importantly, nobody using it actually understood it. The first reaction was training. If the user doesn’t know how to use it, just teach them, right?

No.

Our job as analysts is to build dashboards that even a brand new team member can use without help. If you need an hour-long training session just to get the team navigating the dashboard, you made a mistake. And look, I made that mistake.

## What to do differently

First: **actually understand your stakeholders**, before you even open Power BI. Who’s using it? Do they have experience with dashboards? Are they accessing it on a laptop or a TV in the conference room?

My practical test is simple: think of someone outside your team. With zero training, could they open the dashboard and find what they need in under a minute? If yes, great. If not, rethink before you ship.

## What actually works: a checklist

- **Fewer filters, more buttons:** Buttons and bookmarks are more clickable and intuitive.
- **Light colors help:** Light screens make data easier to read for people outside the data world.
- **Home screen:** Build button-based navigation instead of dumping every metric on the first page.
- **Get a guinea pig:** Find someone less technical to test before you publish.
- **Use AI if you’re a terrible designer:** Ask for references for an interface a 5-year-old could navigate.
- **Labels, titles, and more labels:** Say “Total Net Value Invested in 2026”, not just “Total”.
- **Avoid tables:** Use a dedicated export button when a table is unavoidable.
- **Make it fast:** Users should get in, find what they need, and get out in a few clicks.

## Conclusion

The technical side is the bare minimum. Nobody’s going to praise you for clean DAX if the dashboard is unusable. But a dashboard your manager opens every day, that the team can use without asking for help, is the kind of delivery that gets you noticed.

You don’t need to become a designer. You need to stop building for yourself and start building for whoever is actually going to use it. Trust me, that shift shows up fast in your career.
