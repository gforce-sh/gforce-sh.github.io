---
sidebar_position: 1
slug: overview
---

import { Reveal, Image } from 'semantic-ui-react';
import { MentiFeedbackTabs } from './components/MentiFeedbackTabs';

# Overview

### What will we learn?

<Reveal style={{ width: 'fit-content' }} animated="fade">
<Reveal.Content visible>
<Image
src={require('./assets/front-back-separation.png').default}
size="big"
style={{ marginBottom: 20 }}
/>
</Reveal.Content>
<Reveal.Content hidden>
<Image
src={
require('./assets/front-back-separation-cover.png').default
}
size="big"
style={{ marginBottom: 20 }}
/>
</Reveal.Content>
</Reveal>

In this section, we learn the fundamentals of modern web development and
in particular, the React framework and other related web technologies so
that we can create frontend applications that:

- consume remote endpoints to fetch data,
- consist of multiple pages connected via routes (eg hello.com, hello.
  com/learn, hello.com/learn/react)
- are modular, flexible and scalable, and that can be developed and run in
  isolation.

This literature is the first step in understanding a modern frontend framework,
and should set you up to not only be able to create basic applications, but
also make exploring further into frontend development more approachable.

### What prior knowledge do we need to have?

You can be completely new to React. However, you will need to know the
fundamentals of HTML, CSS and Javascript, because React is based on them.

### How can we ask questions in real-time?

<MentiFeedbackTabs
qrcodeLink={
require('./assets/mentimeter_questions_qrcode.png').default
}
mentiLink="https://www.menti.com/al2upujih1h6"
/>
