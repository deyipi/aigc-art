#### Part 3 - Safety Framework Construction: From Precaution to Contribution

For any project involving the release of a genetically modified organism, safety is not merely a component; it is the foundational bedrock. From the outset, we built our project upon a robust framework of safety, evolving our understanding and practices through **a three-stage process: learning from foundational principles, designing rigorous validation, and contributing our findings back to the community.**

![Figure 10](https://static.igem.wiki/teams/5870/ihp/ihp-3-safety-overall-1.avif)

<p class="figure-caption"><b>Figure 10:</b> The three-stage evolution of our safety framework.</p>

##### Initiation: Learning from Experts and Peers

Our safety journey began by internalizing foundational warnings. Dr. Shen Zhanlong, a gastroenterology expert we interviewed, cautioned us about the systemic risks of introducing a genetically modified microorganism (GMM), specifically highlighting horizontal gene transfer, disruption of native gut microbiota, and environmental spread. This expert advice established a high bar for our project's safety from day one.

We then turned to our peers to understand the state-of-the-art in safety design. At the Live Biotherapeutics Exchange Meeting we hosted, we were profoundly inspired by the innovative safety architectures presented. While team TJUSX showcased robust multiple "kill switches," it was iZJU-China’s DNA origami-based CRISPR delivery system that represented a paradigm shift for us. Their design, which physically separates therapeutic function from replication, demonstrated a proactive philosophy of "Safety by Design" rather than merely reactive containment. This concept became a core tenet of our thinking. Subsequently, during the CCiC poster session, persistent questions from judges and peers about our project's long-term ecological impact acted as the final catalyst, pushing us to translate theoretical understanding into a concrete validation plan.

<div class="triangle-imgs">
  <img src="https://static.igem.wiki/teams/5870/ihp/ihp-3-clinician-quote.webp" alt="Figure 11" class="md-img">
  <img src="https://static.igem.wiki/teams/5870/ihp/ihp-3-biotherapeutics.webp" alt="Figure 12" class="md-img">
  <img src="https://static.igem.wiki/teams/5870/ihp/ihp-3-ccic.webp" alt="Figure 13" class="md-img">
</div>

<p class="figure-caption"><b>Figure 11-13:</b> The initiation of our safety framework, sparked by foundational expert advice (top) and catalyzed by critical questions from peers and judges at the Live Biotherapeutics Exchange Meeting (bottom left) and CCiC (bottom right). </p>

##### Development: Designing a Rigorous Experimental Framework

The pressing questions from the community created a clear directive: we needed a robust method to assess our engineered yeast's ecological impact. Experts at BGI confirmed this urgency, noting that effective colonization would likely require continuous administration, making its long-term effects a critical question. With a well-defined problem, we sought a methodological solution from the team at Xbiome. They provided the crucial missing piece: a powerful suggestion to use a metagenomic method like the micro-method (mipro) to assess the impact by stably passaging fecal samples.

<div class="image-row">
  <img src="https://static.igem.wiki/teams/5870/ihp/ihp-5-bgi-1.webp" alt="Figure 14" class="md-img">
  <img src="https://static.igem.wiki/teams/5870/ihp/ihp-3-xbiome.webp" alt="Figure 15" class="md-img">
</div>

<p class="figure-caption"><b>Figure 14-15:</b> Our visits to BGI (left) and Xbiome (right), where we received critical expert advice that shaped the design of our comprehensive ecological safety assessment protocol.</p>

This actionable advice allowed us to design a comprehensive experimental protocol to co-culture our engineered yeast with fecal microbiota. The plan included a multi-dimensional analysis, featuring metagenomic sequencing to track community structure, short-chain fatty acid (SCFA) detection to assess metabolic function, and endotoxin assays to monitor inflammatory potential. This framework, born from community feedback and refined by industrial expertise, was designed to provide a holistic view of our project's ecological safety. 

[See our Safety journey](https://2025.igem.wiki/peking/safety-and-security/)

##### Accomplishment: Co-developing Safety Standards

We believe that pivotal safety insights should be shared and codified. The presentation from iZJU-China at our exchange meeting was a key turning point. Their elegant use of DNA origami was more than just a clever technique; it was a tangible example of the proactive "Safety by Design" philosophy that had resonated so strongly with us.

This specific example crystallized the day's discussions into a powerful realization: these advanced safety concepts were too valuable to remain as isolated ideas within a single meeting. This became the direct catalyst for our proposal to iZJU-China: to collaborate and transform these innovative principles into a lasting, practical resource for the entire community. Our two teams joined forces to co-draft a set of **Safety Standards for Live Biotherapeutics**. The workload was shared: our Peking team drafted the core standards and consulted with enterprises for revisions, while iZJU-China enriched the document with relevant iGEM project examples and handled the graphic design. This collaborative process transformed the reflections from a single meeting into a practical guide, ensuring our safety journey culminated not just in a safer project, but in a valuable contribution to the collective wisdom of iGEM.

<div class="image-row-three">
  <img src="https://static.igem.wiki/teams/5870/ihp/ihp-3-safety-stantard-page1.webp" alt="Figure 16" class="md-img">
  <img src="https://static.igem.wiki/teams/5870/handbook/safety-stantard-page.avif" alt="Figure 17" class="md-img">
  <img src="https://static.igem.wiki/teams/5870/ihp/safety-stantard-page4.webp" alt="Figure 18" class="md-img">
</div>


<p class="figure-caption"><b>Figure 16-18:</b> The iGEM Safety Standard for Engineered Live Biotherapeutic Products, co-authored by our team and iZJU-China, transforming our collective safety insights into a practical resource for future teams.</p>


[See our Safety journey](https://2025.igem.wiki/peking/safety-and-security/)

<style>
    .space-content .triangle-imgs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  margin: 20px auto;
}


.space-content .triangle-imgs img:nth-child(1) {
  grid-column: 1 / span 2;
  width: 50%;
}

@media (max-width: 768px) {
  .triangle-imgs {
    grid-template-columns: 1fr;
  }
  .triangle-imgs img:nth-child(1) {
    grid-column: auto;
    width: 80%; 
  }
  .md-img {
    width: 90%;
    max-width: none;
  }
}

.space-content .image-row {
  display: flex;
  margin: 20px auto;
  justify-content: center; 
  gap: 5px;             
  flex-wrap: wrap;        
}

.space-content .image-row-three {
  display: flex;
  margin: 20px auto;
  justify-content: center; 
  gap: 5px;                
  flex-wrap: wrap;        
}

.space-content .image-row-three .md-img {
  width: 32%;            
  max-width: 300px;         
  height: auto;
  display: block; 
}

</style>
