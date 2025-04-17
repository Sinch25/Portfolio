import { useParams } from "react-router-dom";
import { ArticleContent } from "@/components/ArticleContent";

const articles = {
  "1": {
    title: "Neuroscience of Music",
    date: "28/11/2024",
    tags: ["biology"],
    content: `Music. A beautiful form of sound that brings various people together. Music reaches hearts like none other. When you unexpectedly meet somebody at a concert vibing to the same music as you, it stems feelings of closeness and connection. When people listen to their favourite songs together, something remarkable happens in the brain- "neural responses synchronize". This synchronization known as "neural entertainment" is a key factor in why shared musical activities often lead to stronger social bonds.


Impact of Music on Healing 

Growing evidence suggests, that listening to Mozart's Sonata for Two Pianos in D Major and can reduce the frequency of seizures in some people with epilepsy. So beautiful, isn't it?
Other conditions and diseases, ranging from Parkinson's to depression to Alzheimer's, could someday have therapeutic solutions derived from an understanding of music. For instance, by identifying the exact type of music able to provoke a particular cognitive, motor, or emotional response, there could be progress toward healing, improving, or compensating for disrupted brain function in various diseases. An increased understanding of brain mechanisms can facilitate this.


Impact of Music on Memory 

Music can help retain essential information despite memory loss. Music memory is stored in the hippocampus, centrally located in the brain. Therefore, music memories are less likely to be negatively impacted by age or disease.
A musical mnemonic device is a natural way to memorize and recall information. As children, we learn various academic and social concepts through songs. Similarly, these memory strategies are highly effective for adults. In fact, our brains automatically "fill in the gaps" when a song suddenly stops.
Music therapists often incorporate these techniques with individuals to improve memory retention or developmental learning goals. Music may activate memories and remind us of places, events or people. A familiar tune may elicit the emotions associated with those memories.


Impact of Music on Metal Health 

Music can provide comfort and solace during times of distress, allowing us to express our feelings without having to put them into words. Music can also be used as a tool for self-reflection, helping us gain insight into our own experiences and find meaning in difficult situations.
Music has been found to be particularly beneficial for those who are grieving or suffering from trauma or PTSD (post-traumatic stress disorder). Listening to certain types of music can evoke memories of happier times, providing a sense of hope and optimism even when faced with difficult circumstances.


Impact of Music on Behaviour 

Have you found yourself singing or listening to your go-to songs while performing boring, tiresome and tedious tasks? This is mostly due to the fact that music can be a motivator, a time for completing tasks or a mood enhancer. Music can validate your current emotional state and influence your emotional destination.
Overall, music is a bewitching and elegant tool for self-expression, recognition and connection.
Our lives are all shaped by music and always will be.`,
    images: [
      "/lovable-uploads/8702bde2-d029-47be-aa97-f265d0eebb33.png",
      "/lovable-uploads/13ee81a7-306e-4026-bc3a-4a9d85a62de9.png",
    ],
  },
  "2": {
    title: "Existential Crisis Norms",
    date: "15/12/2024",
    tags: ["biology"],
    content: `"What am I doing here?" "What difference does my existence make in this world?" "Why am I the way I am?" "What is my purpose?" The list of questions goes on and on. Ever wondered why sometimes thoughts like these randomly pop up in your brain just from nowhere? These thoughts are very much common among people all around the world and signify an existential crisis.

An existential crisis is a period of questioning and contemplation about the meaning of life and one's own existence. The person might feel disconnected from the world and experiences feelings of inner emptiness and self-doubt. This can trigger anxiety, stress and depression. People might feel like they just don't fit in anywhere and they just find it difficult to go about their daily lives and work.

An existential crisis can be triggered by various factors like depression, anxiety, stressful life events, traumatic experiences, etc. When you are going through something similar to this, don't panic, it is normal. Talk to your friends, family or anybody who you trust. Seek professional help if required. Practise positive thinking and mindfulness. Your thoughts can make you strive better or leave you in distress. So always try to stay optimistic. Everything might seem overwhelming and unattainable for a while, but you will get through it. Trust me, you're gonna make it.`,
    images: [
      "/lovable-uploads/d80d5adc-a2c4-4c81-8c03-953fe96a4ad4.png",
      "/lovable-uploads/d45090e9-31b2-4eb6-8169-49bca278aeb8.png",
    ],
  },
  "3": {
    title: "Poster",
    date: "10/09/2021",
    tags: ["literature"],
    content: `Felt a little free spirited and went for a poster here, instead of an article. This poster is a reference to Maya Angelou's poem: I know why the caged bird sings`,
    images: ["/lovable-uploads/dad8a8f8-06bc-4279-8789-a66a3b07ffee.png"],
  },
  "4": {
    title: "The Times Front Page",
    date: "03/07/2021",
    tags: ["history"],
    content: `Reporting from the Frontlines – Spain, 17th April 1938

For this article, I stepped into the shoes of a 1930s-era war correspondent, transporting myself and my team back to Easter Sunday, 17th April 1938, at the height of the Spanish Civil War. My goal was to recreate the front page of a newspaper from that era, dated Monday, 18 April 1938, capturing the raw emotion, chaos, and humanity of the battlefield in real time — as if it had just happened.

In this edition, I aimed to bring first-hand coverage of the most pressing events that defined the day:

The fate of countless refugees, displaced and desperate, seeking shelter amidst relentless conflict.

A tense and bloody skirmish at the pontoon bridge on the River Ebro, a strategic choke point that witnessed fierce resistance and loss.

The brutal artillery shelling of San Carlos, shaking the very ground and lives of those caught within its blast radius.

The steady and ominous advance of Fascist forces, changing the tide of war as fear spread through Republican strongholds.

The constant threat from above — enemy planes flying in squadrons, the drone of engines and whine of sirens a chilling soundtrack to war.

And in sharp contrast, flickers of Easter celebrations, clung to by civilians as a fragile symbol of hope and resilience amidst devastation.`,
    images: ["/lovable-uploads/41b15fa6-659a-4a97-908b-bba7f72359f0.png"],
  },
};

const ArticleView = () => {
  const { articleId = "1" } = useParams();
  const article = articleId
    ? articles[articleId as keyof typeof articles]
    : articles["1"];

  if (!article) {
    return <div className="p-8">Article not found</div>;
  }

  return <ArticleContent {...article} />;
};

export default ArticleView;
