#### Parts

###### Multiple Knockout

We have designed a double-stranded DNA construct that serves as the template to transcribe sgRNAs targeting Ste2 and Sst2 of *Saccharomyces cerevisiae* for improving the efficiency of mating pathway engineering. A single RNA polymerase III promoter (pSNR52) drives the transcription of a single primary transcript containing tandem sgRNA-tRNA<sup>Gly</sup> units. This strategy was derived from the gRNA-tRNA array CRISPR approach. After transcription, yeast endogenous nucleases (RNase P and Z) specifically recognize and cleave the tRNA<sup>Gly</sup> sequences, releasing functional sgRNAs that guide Cas9 to target genomic loci, allowing for dual-knockout in one plasmids. 

Moreover, this design can be applied to multiple knockout operations up to five in yeast under only one SNR52 promoter. Simply arrange the sgRNAs and insert the tRNA-linkers between each neighbor, and assemble this construct into the CRISPR/Ca9 vector under the SNR52 promoter. This design is expected to exempt us from introducing exogenous cleavage factors or large self-cleavable ribozymes when conducting multiple gene knockouts, and reduce plasmid size and complexity at the same time. 


##### Chimeric GPCR signaling pathway

We developed an innovative chimeric GPCR signaling pathway to construct a yeast-based sensory system for the detection of N<sup>α</sup>-methylhistamine. Accordingly, we provide the iGEM community a novel strategy and the corresponding protocols for GPCR engineering.

In our experiments, four chimeric GPCRs are designed ([BBa_25BSG0GB](https://registry.igem.org/parts/bba-25bsg0gb), [BBa_25TM8A5F](https://registry.igem.org/parts/bba-25tm8a5f"), [BBa_25QRRCR3](https://registry.igem.org/parts/bba-25qrrcr3), [BBa_25J9IIZR](https://registry.igem.org/parts/bba-25j9iizr)), corresponding to fusions of each hHR subtype’s extracellular domain with Ste2’s signal transduction domain. During the iGEM project period, we successfully engineered the human H2R–yeast Ste2 chimeric GPCR (cH2SR) plasmid and achieved its stable transformation into yeast cells. 

In the dry lab, we employed molecular docking and molecular dynamics (MD) simulations to screen for the most sensitive and effective engineered GPCRs. The analysis indicates that the Human H3R-yeast Ste2 chimeric GPCR (cH3SR) systems exhibit notable H2-H6 distance reductions (~2.5 nm and ~2.0 nm, respectively), meeting activation criteria. The integration of GPCR signaling pathway modeling with wet lab validation presents a promising universal strategy for engineering yeast-based GPCR sensing systems with targeted functionalities.

For further information, you may refer to our Lab and Part Collection sections.

#### Protocol

##### Modified Immunocytofluorescence (ICF) Assay

We developed an innovative adaptation of the immunocytofluorescence (ICF) technique to detect protein–protein interactions, allowing the assessment of interactions between proteins on the cell surface and a designated extracellular protein. In this modified approach, cells were co-incubated with the target protein to facilitate binding, followed by antibody incubation specific to the target protein. Subsequent fluorescence microscopy enabled visualization of the protein’s subcellular localization, from which potential interaction events could be inferred.

Conceptually, once the localization of a protein known to interact with the target is established, this method can be applied to evaluate their interaction status. In the present study, we employed this strategy to examine the interaction between the HopQ protein and the C1ND protein expressed on the cell wall. The detailed experimental protocol is provided below.

<iframe 
    src="https://static.igem.wiki/teams/5870/contribution/modified-immunocytochemistry-icc-assay.pdf"
    width="100%" 
    height="800px"
    style="border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
    title="ICF Assay">
</iframe>

#### New Model

##### Physical modeling of the process of penetrating the gastric mucus layer

Many studies have focused on using microelectrodes to deliver drugs to the stomach. However, these studies have limited themselves to measuring the velocity of drug particles in the stomach and the proportion of drug remaining in the stomach. For example, fluorescence intensity was measured over time. We approached this issue from a physical modeling perspective. Using the Stokes drag equation, we numerically simulated the **velocity of microspheres in fluid** and provided a relatively reasonable description of the process by which drug particles penetrate deep into the gastric mucus layer. This provides a new perspective for further refined physical modeling and drug delivery using microelectrodes.

![alt text](https://static.igem.wiki/teams/5870/model/micromotor.webp)
<p class="figure-caption"><b>Figure 1: </b>The picture depicts the model of the process of microspheres penetrating into the gastric mucus layer.</p >

##### New SEIR model considering drug resistance

Unlike conventional models that assume fixed recovery rates and ignore treatment behavior, our improved SEIR model extends the traditional framework by explicitly including **a treated population** and **dynamic drug resistance**, allowing for a more realistic simulation of Helicobacter pylori infection under therapeutic intervention.Our model introduces a **treatment compartment ($D$)** to represent individuals receiving medication, and a **time-dependent recovery rate ($\gamma_D$)** that evolves with drug resistance. We also consider patients’ willingness to take treatment, loss of immunity, and loss of drug protection, enabling the model to capture the long-term persistence and cyclic nature of H. pylori infection. These improvements make our model better suited to evaluate therapeutic strategies such as HpBuster, providing deeper insight into infection dynamics and resistance control.

![alt text](https://static.igem.wiki/teams/5870/model/seir-show.webp)
<p class="figure-caption"><b>Figure 2: </b>This flow chart illustrates the framework of our improved model.</p >


#### Human practice - Framework, Collaboration and Safety

At the core of our project is the belief that scientific progress is a **collaborative endeavor**. We hold that the most impactful contributions are those that empower others, providing them with the tools, frameworks, and knowledge to build a better future. Driven by this philosophy, our Human Practices work was intentionally designed not only to advance our own project but also to create scalable and reusable resources for the entire iGEM community.

##### A Blueprint for Inter-Team Collaboration: The Live Biotherapeutics Exchange Meeting

Recognizing a shared challenge among teams working on therapeutic projects, we took the initiative to organize and host the **iGEM Live Biotherapeutics Exchange Meeting**. This summit became a vibrant hub for collective wisdom, bringing together over 100 students from 28 teams to consolidate best practices for the safe design of engineered organisms.

The event was structured around critical pillars of therapeutic design, including targeted delivery, genetic circuit logic, and biosafety. With guidance from expert speakers like Professor Chenli Liu and Dr. Bing Zhai, the meeting fostered a deep dialogue on making "safety" and "controllability" the lifelines of our work.

Our contribution here is not just the event itself, but a proven **blueprint for community building**. We have documented our organizational process and the key outcomes, offering a model for future teams to organize similar thematic, multi-team collaborations to tackle the most complex challenges in synthetic biology.

[↗ Read the full summary of the event and its outcomes on our iHP page.](https://2025.igem.wiki/peking/human-practices/)

##### Codifying Safety: The iGEM Safety Standard for Engineered Live Biotherapeutics

Our most significant contribution is the creation of a lasting resource to elevate safety standards across the competition. In collaboration with iZJU-China, we co-authored the **iGEM Safety Standard for Engineered Live Biotherapeutic Products (LBPs)**, a comprehensive guide designed by iGEMers, for iGEMers.

This standard translates professional regulatory principles into a rigorous yet feasible framework for the iGEM context. Its primary goal is to instill a **"regulatory mindset"** in participants, encouraging teams to approach their projects with the foresight and meticulousness of therapeutic development. The standard is built on a clear, five-part structure:

**Part I & II (Foundational Principles and CMC):** Establishes core safety principles and adapts professional     Chemistry, Manufacturing, and Controls (CMC) concepts for the iGEM lab,     focusing on chassis selection and genetic payload design.
**Part III (Biocontainment):**     Advocates for the design and validation of active biocontainment systems,  such as kill switches or engineered auxotrophy, to prevent environmental     release.
**Part IV (Non-Clinical Safety):**     Provides a framework for direct experimental safety testing, recommending *in vitro* cytotoxicity assays on human cell lines to assess the final     product's safety profile.
**Part V (Documentation and Responsibility):** Encourages compiling a "Safety Dossier" and reflecting on ethical considerations like potential dual-use.

By creating and sharing this standard, we provide a practical tool that will help future teams working on LBPs enhance the safety and scientific rigor of their projects, fostering a stronger culture of responsibility across the entire iGEM community.

The full iGEM Safety Standard for Engineered Live Biotherapeutic Products can be viewed here.

<iframe 
    src="https://static.igem.wiki/teams/5870/safety/igem-safety-standard.pdf"
    width="100%" 
    height="800px"
    style="border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
    title="Safety">
</iframe>
