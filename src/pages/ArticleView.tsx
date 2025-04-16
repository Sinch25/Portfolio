
import { useParams } from 'react-router-dom';
import { ArticleContent } from '@/components/ArticleContent';

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
      "/lovable-uploads/13ee81a7-306e-4026-bc3a-4a9d85a62de9.png"
    ]
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
      "/lovable-uploads/d45090e9-31b2-4eb6-8169-49bca278aeb8.png"
    ]
  },
  "3": {
    title: "Poster",
    date: "10/01/2025",
    tags: ["literature"],
    content: "Feeling a little free spirited and went for a poster here, instead of an article. This poster is a reference to Maya Angelou's poem: I know why the caged bird sings",
    images: [
      "/lovable-uploads/3b271361-6e6f-41bd-a566-73737ac4d1fc.png"
    ]
  },
  "4": {
    title: "The Times Newspaper",
    date: "17/04/1938",
    tags: ["history"],
    content: `Monday, April 17, 1938

The Times

Disaster on Domingo De Resurrección
The effects of Easter, a holiday significant of new hope and new life and possible change are still remnant. Workers and children celebrated this festival with their family, moving around happily. The Nationalists patrolling the streets held back from opening gunfire on people celebrating this holiday as per the order received by their leader. "The holiday of rebirth and renewal should not be wasted on taking commoner's lives who believe that revolting against my way of achieving a peaceful nation will do them good", says General Franco. However, after making this statement, the Roman Catholic clergy and faithful who were assembled peacefully celebrating Easter in the Republican zone were attacked and murdered in reaction to the news of the military revolt at noon. Roman Catholic churches, convents, monasteries, seminaries and cemeteries were sacked, burned and desecrated including the people assembled inside them by Chief Walliams and his men. After viewing this terrible massacre, General Franco's words simply were, "Rebirth cannot take place without sacrifices towards a good cause, Chief Walliams was only doing his duty."

French Government Aiding Refugees
10,000 people fled to France seeking refuge. The country has recently introduced harsher rules for refugees, which allows for asylum seekers from undesirable countries to be detained at interment camps. Among the refugees, many artists stated that they earlier saw 'them' breaking and burning instruments and that 'they' killed artistes. Painters and poets who wanted to showcase their talents had no choices but to leave immediately. The Spanish Republican government still holds their ground, refusing to leave, hoping against hope to reverse the situation.

Scarce seconds
In the town of San Carlos, when all trucks, carts, soldiers and people were ready to move out, there was a sudden advancement of Fascists. Once the initial coup d' etat plan had failed, the Corpo Truppe Volontarie (CTV) was created to help General Franco. General Mussolini sent over 80,000 Italians to fight in the war, out of which 25,000 troops launched a surprise attack at San Carlos. Before anyone could make a move, within seconds the whole town was bombed. Artillery such as heavy mortars, large-caliber guns and tanks were used. To make sure there were no survivors, fighter planes and jets released heavy damage bombs from above.

Action at River Ebro
All the refugees, trucks and carts that were hurrying up the slope of the pontoon bridge across the river, successfully made it out alive, escaping to France. Had the Fascists arrived a few minutes earlier, the whole population present there would have been wiped out. However, the Fascists did not leave the place untouched. The pontoon bridge was destroyed and fell into the river. The connecting lands were burning up with flames.`,
    images: [
      "/lovable-uploads/dcab7a1b-c890-463a-b454-d98dc4b30c98.png", 
      "/lovable-uploads/c0574dc9-37a9-4e7e-873c-cdd7271af06a.png",
      "/lovable-uploads/2feae7dd-4883-4ec9-b8de-5fee723fda8a.png",
      "/lovable-uploads/de3e8418-0128-40da-870f-7373948cc951.png"
    ]
  }
};

const ArticleView = () => {
  const { articleId = "1" } = useParams();
  const article = articleId ? articles[articleId as keyof typeof articles] : articles["1"];

  if (!article) {
    return <div className="p-8">Article not found</div>;
  }

  return <ArticleContent {...article} />;
};

export default ArticleView;
