At the heart of our project lies a steadfast commitment to safety, a core principle that has guided every stage of our work, from initial concept to final design. We believe that responsible innovation in synthetic biology demands a multi-layered safety framework encompassing the laboratory, the project, and the broader community. Our approach is built on a proactive philosophy of anticipating risks, designing rigorous validations, and contributing our findings to foster a safer future.

![Figure](https://static.igem.wiki/teams/5870/safety/safety-overview.avif)
<p class="figure-caption"><b>Figure 1:</b> An overview of our multi-layered safety framework, which integrates Laboratory Safety, Project Safety, and Community Contribution to ensure responsible innovation.</p>


This picture details our comprehensive safety architecture, structured in three core parts:
* **Laboratory Safety:** Outlining the robust training, stringent protocols, and established culture of safety that protect our team members and ensure a secure research environment. 
* **Project Safety:** Addressing the specific risks associated with our engineered living biotherapeutic. We detail our strategies for ensuring both *in vivo* safety through a comprehensive assessment of the yeast's impact on gut microbiota, and environmental safety via built-in biological containment mechanisms. 
* **Safety Contribution:** Demonstrating our commitment to advancing community-wide safety standards. We describe how we initiated critical discussions on biosecurity and collaborated with team iZJU-China to develop a set of Safety Standards for Live Biotherapeutics, transforming dialogue into a lasting resource for future iGEM teams. 

Through this structured approach, we demonstrate that for our team, safety is not an afterthought but the very foundation of our scientific inquiry.

#### Laboratory Safety
Our commitment to a secure working environment is operationalized through a comprehensive program built on rigorous training and strict adherence to established safety principles.

##### Rigorous Safety Training
Before gaining laboratory access, all team members must complete a mandatory safety training program and pass a final examination with a score of 95% or higher. This program covers essential modules, including chemical reagent management, instrument operation, emergency response, and biohazard prevention. Initial hands-on work is conducted under the direct supervision of instructors, who emphasize critical risk points and proper operational techniques to instill safe habits from the start. The training also includes detailed instruction on the correct use of personal protective equipment (PPE), chemical spill response, fire safety, and biohazard disposal. All training is meticulously documented, and mandatory quarterly refresher sessions are required to maintain laboratory access, ensuring our safety knowledge remains current and robust.

##### Guiding Principles and Protocols
Our daily operations are governed by a strict set of safety rules designed to proactively mitigate risks, centered on the principle of "Prevention First, Safety Foremost."

Our laboratory culture is governed by key tenets:
* **Hazard Management:** We conduct regular inspections of water sources, electrical systems, gas cylinders, microbial cultures, hazardous chemicals, and pressure vessels to promptly eliminate potential hazards. 
* **Chemical and Biological Safety:** Flammable solvents are stored in cool, secure locations away from ignition sources. Highly toxic chemicals, radioactive materials, and microbial strains are managed by designated personnel, with their use requiring strict approval, documentation, and limitation to necessary amounts. All experiments involving such materials require at least two personnel to be present. 
* **Waste Disposal:** All waste materials and corrosive solutions are disposed of according to established institutional regulations, with strict prohibitions against random disposal. 
* **Emergency Preparedness:** The laboratory is fully equipped with fire extinguishers, fire blankets, and smoke detectors. All personnel are trained on the locations of emergency shut-off valves and the correct operation of firefighting equipment.
* **General Conduct:** We maintain a clean and orderly environment, ensuring all utilities are turned off and facilities are secured before leaving. 
![Figure](https://static.igem.wiki/teams/5870/safety/safety-laboratory-2.avif)
<p class="figure-caption"><b>Figure 2:</b> Implementation of strict waste sorting and disposal protocols in our laboratory to manage chemical and biological waste safely.</p>

##### Biosafety and Biocontainment
As our primary biological containment strategy, we utilize a specially constructed quadruple auxotrophic yeast strain (requiring uracil, leucine, histidine, and tryptophan). This strain cannot survive outside of specific laboratory culture conditions, effectively preventing environmental persistence. When handling live cultures, we strictly adhere to BSL-1 guidelines. To safely conduct experiments involving *Pseudomonas aeruginosa*, our team has installed a dedicated biosafety cabinet, which is used exclusively for this purpose with sterile instruments and an alcohol lamp. Team members are also required to wear masks during these experiments to minimize inhalation risk. Following experiments, all contaminated materials undergo immediate decontamination through autoclave sterilization at 121°C for 30 minutes to prevent cross-contamination and eliminate potential biosafety risks.

![Figure](https://static.igem.wiki/teams/5870/safety/safety-laboratory-1.avif)
<p class="figure-caption"><b>Figure 3:</b> Adherence to BSL-1 guidelines, utilizing a dedicated Class II biosafety cabinet for all experiments involving Pseudomonas aeruginosa to ensure biocontainment.</p>

#### Project Safety: A Dual-Pronged Approach
For any project involving a genetically modified organism (GMO) intended for therapeutic use, a rigorous assessment of its safety—both within the target environment (in vivo) and in the external environment—is paramount. Our safety framework was meticulously designed to address both dimensions.

##### **In Vivo Safety: Assessing the Impact on Gut Microbiota**

A primary safety concern for any live biotherapeutic is its potential to disrupt the delicate balance of the native gut microbiota. To address this, we designed a comprehensive experimental framework to scientifically and quantitatively evaluate the ecological impact of our engineered yeast in a simulated human gut environment. The design was critically informed by our consultation with industry experts at Xbiome, who recommended using a stable *in vitro* culturing method like the MiPro (microbiota processing) protocol to assess fecal samples<sup id="back1">[1](#ref1)</sup>.

![Figure](https://static.igem.wiki/teams/5870/safety/mipro-model.avif)
<p class="figure-caption"><b>Figure 4:</b> The MiPro in vitro model used for simulating the gut environment to assess the ecological impact of our engineered yeast on fecal microbiota. (Li L, Abou-Samra E, Ning Z, et al.)</p>

This expert advice allowed us to design a multi-dimensional analysis to provide a holistic view of our project's ecological safety. The framework systematically addresses three core questions:

●	**Does our yeast alter microbial community structure?** We will use shotgun metagenomic sequencing to obtain a high-resolution profile of species composition and abundance. This allows us to identify changes in bacterial populations and track overall microbial diversity.

●	**Does our yeast alter the metabolic function of the gut microbiota?** We will use GC-MS to quantify Short-Chain Fatty Acids (SCFAs). As key products of a healthy microbiome, SCFAs like acetate and butyrate serve as direct indicators of the metabolic activity and functional health of the microbial community.

●	**Does our yeast pose an inflammatory risk?** We will use a Limulus Amebocyte Lysate (LAL) assay to measure endotoxin (LPS) levels. Elevated LPS, a component of gram-negative bacteria, can signal dysbiosis or a potential inflammatory risk, making it a vital safety marker.

![Figure](https://static.igem.wiki/teams/5870/safety/safety-experiment.avif)
<p class="figure-caption"><b>Figure 5:</b> Experimental workflow for the comprehensive in vivo safety assessment, integrating metagenomic, metabolic, and inflammatory marker analysis.</p>

This multi-pronged approach, combining structural, functional, and safety-marker analyses, allows for a robust and scientifically rigorous assessment of our engineered yeast's *in vivo* safety.
The complete, detailed protocol for this experiment is listed below：

<iframe 
    src="https://static.igem.wiki/teams/5870/safety/safety-protocol.pdf"
    width="100%" 
    height="800px"
    style="border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
    title="Safety-protocol">
</iframe>


##### **Environmental Safety: Containment by Design**
To ensure our engineered yeast is safely eliminated after exiting the host, we have developed a comprehensive "Containment by Design" biosafety system. The design process began with a systematic evaluation of the differences between the in-vivo and external environments, which led us to identify temperature as the most stable and reliable signal to distinguish the host from the outside world. Based on this finding, we constructed a **"double-insurance" containment strategy**, consisting of an active **cold-inducible suicide switch and a passive auxotrophic barrier**. The former activates a potent apoptotic gene (Bax) to actively eliminate the cells upon entry into the cooler external environment. The latter utilizes the strain's inherent inability to synthesize several essential nutrients, preventing it from surviving in nature due to starvation and thus serving as a reliable, built-in fail-safe. 

###### **Part 1: Strategy Selection**

![Figure](https://static.igem.wiki/teams/5870/safety/safety-design-1.avif)
<p class="figure-caption"><b>Figure 6:</b> Decision-making flowchart for the environmental biocontainment strategy. </p>

 **1.1 Core Design Principle and Environmental Analysis**

The primary objective of this biosafety system is to prevent the environmental persistence and potential gene leakage of our engineered *Saccharomyces boulardii* following its therapeutic use and subsequent excretion. The core design principle is to create a robust, autonomous "suicide switch" that enables the yeast to distinguish between its operational environment (the human gastric mucus layer) and any external, non-host environment<sup id="back2">[2](#ref2)</sup>. Survival is permissive only within the host, while release into the external environment actively triggers a cell death cascade. To identify reliable triggers, we first established the key physical and biochemical differences between the target in-vivo niche and the external environment.

**Table 1: Comparison of In-Vivo vs. External Environments**
| Parameter | Gastric Mucus Layer (In-Vivo) | Natural Environment (Ex-Vivo) | Signal Reliability |
| :--- | :--- | :--- | :--- |
| **Temperature** | Stable, constant \~37°C | Variable, typically \< 30°C | **High** |
| **Oxygen** | Microaerophilic / Anaerobic | Aerobic | **High** |
| **pH** | Near-neutral (\~pH 6-7) | Variable, often near-neutral | **Low / Unreliable** |
| **Light** | Complete darkness | Presence of light (variable) | **Moderate** |

 **1.2 Exploration and Evaluation of Potential Triggers**

Based on a literature review and the analysis above, we systematically evaluated several potential environmental signals to control the suicide switch. The initial hypothesis was to leverage the pH difference between the highly acidic stomach lumen and the neutral pH of the environment. However, this strategy was deemed unreliable because the therapeutic target site—the gastric mucus layer where *H. pylori* colonizes—is also a near-neutral pH environment. Therefore, pH as a signal cannot effectively distinguish between the intended operational niche and the external world. Another strategy considered was the use of light-inducible systems (optogenetics), where the presence of light would trigger the expression of a toxin. While the gut is a dark environment, this strategy was set aside due to its lack of universal reliability; if the engineered yeast were released into a dark environment, such as soil or a sewer system, the switch would not activate. The significant difference between the microaerophilic gut environment and the aerobic external world makes oxygen a very strong and reliable trigger. However, its primary drawback is a major manufacturing challenge: to prevent activation of the switch during production, the yeast would have to be cultured under anaerobic conditions, which drastically reduces the biomass yield for *Saccharomyces*. Finally, temperature emerged as the most robust and universally applicable signal. The human body maintains a stable 37°C, a condition that is virtually never replicated consistently in the external environment. A drop in temperature upon excretion is a certainty, making it an ideal trigger for a biocontainment switch<sup id="back3">[3](#ref3)</sup>,<sup id="back4">[4](#ref4)</sup>,<sup id="back5">[5](#ref5)</sup>>.

 **1.3 Final Integrated Biosafety Strategy**

Based on the evaluation, we selected a dual-layered, "double insurance" strategy that combines an active, trigger-based mechanism with a passive, fail-safe mechanism to ensure maximum biosafety<sup id="back6">[6](#ref6)</sup>.

The primary mechanism will be an **Active Cold-Inducible Suicide Switch**. The core of our safety system is a temperature-controlled circuit that actively kills the cell, ensuring the yeast is rapidly eliminated upon release into the cooler external environment<sup id="back7">[7](#ref7)</sup>.

The secondary mechanism is a **Passive Nutrient Auxotrophy System**, which is an intrinsic feature of our chosen chassis. We are using the S288C-derivative laboratory strain **BY4741**, which possesses a quadruple auxotrophic genotype: *his3Δ1, leu2Δ0, met15Δ0, and ura3Δ0*<sup id="back8">[8](#ref8)</sup>,<sup id="back9">[9](#ref9)</sup>. This means the strain is incapable of synthesizing the essential nutrients histidine, leucine, methionine, and uracil. These compounds will be supplied during manufacturing and co-administered with the therapy to ensure viability. However, it is extremely unlikely that these four specific nutrients would be simultaneously available in sufficient concentrations in a natural environment like soil or water. Therefore, should the primary active suicide switch fail due to mutation, the yeast would still be unable to survive and proliferate, making this an exceptionally robust, built-in, fail-safe system. This integrated, dual-layered approach provides a highly responsible biosafety framework, minimizing the risk of environmental impact.


-----

###### **Part 2: Specific Construction of the Active Biosafety System**

Following the selection of an integrated biosafety strategy, this section details the thought process for constructing the active component: the temperature-sensitive suicide switch. The chosen design is: **"the human *Bax* gene placed under the control of a synthetic cold-inducible promoter, which is composed of four tandem repeats of the Upstream Activating Sequence (UAS) from the yeast *TIP1* gene and a minimal *CYC1* core promoter."**<sup id="back10">[10](#ref10)</sup>

![Figure](https://static.igem.wiki/teams/5870/safety/safety-design-2.avif)
<p class="figure-caption"><b>Figure 7:</b>  Schematic of the construction process for the active cold-inducible suicide switch, detailing the assembly of the synthetic pCold_TIP1 promoter, the codon-optimized Bax toxin gene, and the final expression vector. </p>

  \* **Stage 1: Design and Synthesis of the Synthetic Cold-Inducible Promoter (pCold\_TIP1)**

Our primary challenge is to create a promoter that is transcriptionally silent at 37°C but robustly active at ambient temperatures (\<30°C). A synthetic approach was chosen to achieve a wider dynamic range and tighter regulation. We selected the Upstream Activating Sequence (UAS) from the *S. cerevisiae TIP1* gene, which is known to be strongly upregulated during cold shock, thereby harnessing the cell's native temperature-sensing machinery<sup id="back11">[11](#ref11)</sup>. To amplify this response, we will place four copies of the *TIP1* UAS in tandem, a common design principle to ensure a strong and cooperative transcriptional output. This UAS array will be placed upstream of a minimal core promoter from the yeast *CYC1* gene. This core sequence provides the basic machinery for transcription but lacks its own regulatory elements, making its activation entirely dependent on our synthetic UAS array. The complete promoter sequence will be synthesized as a single DNA fragment to ensure accuracy.

  \* **Stage 2: Selection and Codon Optimization of the Toxin Gene (*Bax*)**

The human *Bax* gene was selected as the "warhead" due to its well-documented and highly effective pro-apoptotic function in yeast<sup id="back12">[12](#ref12)</sup>,<sup id="back13">[13](#ref13)</sup>. It acts by integrating into the mitochondrial membrane, triggering a lethal cascade that is a reliable and potent method for inducing cell death. To ensure high levels of protein expression following activation, the human *Bax* DNA sequence will be codon-optimized for *Saccharomyces*. This process, which replaces rare codons with those preferred by yeast without altering the protein's amino acid sequence, is critical for achieving a rapid toxic effect. A strong transcription terminator, such as the standard *ADH1* terminator, will be placed downstream of the *Bax* gene to ensure proper termination and mRNA stability<sup id="back14">[14](#ref14)</sup>.

  \* **Stage 3: Assembly into a Yeast Expression Vector**

The final expression cassette, consisting of our synthetic promoter, the optimized toxin gene, and the terminator (pCold\_TIP1 - Bax - ADH1t), will be assembled and cloned into a stable, low-copy number yeast expression vector. A CEN/ARS-based plasmid is preferred over a high-copy 2µ-based plasmid to minimize the metabolic burden on the yeast and, crucially, to reduce the risk of leaky *Bax* expression at 37°C, which could impair the cell's therapeutic function<sup id="back15">[15](#ref15)</sup>. The final construct will be assembled using standard cloning techniques and fully sequenced to verify its integrity before transformation into our *S. boulardii* strain. This overall approach aligns with modern principles for designing evolutionarily stable kill switches.


#### Safety Contribution: Fostering a Community-Wide Culture of Responsibility
We believe that advancing biosafety is a collective responsibility and that pivotal safety insights should be shared and codified to benefit the entire synthetic biology community. Our safety journey evolved from learning foundational principles to actively contributing to the development of community-wide standards.

To catalyze this dialogue, our Peking team initiated and hosted the ***iGEM Live Biotherapeutics Exchange Meeting*** on August 5, 2025(To view more details, please go to the "iHP-Entrepreneurship & Future Vision" page). The summit brought together **over 100 students from 28 iGEM teams** to collaboratively address and consolidate best practices for the safe design and control of engineered organisms. Expert guidance from invited speakers **Prof. Chenli Liu and Dr. Bing Zhai** reinforced that safety and controllability are the lifelines for any viable therapeutic. Peer discussions forged a consensus on essential technical safeguards, such as designing redundant "kill switches" and establishing a clear Mechanism of Action (MOA).

![Figure](https://static.igem.wiki/teams/5870/ihp/ihp-6-lbp-1.webp)

<p class="figure-caption"><b>Figure 8:</b>  Highlights from the iGEM Live Biotherapeutics Exchange Meeting, an event initiated by our team to foster community-wide dialogue on biosecurity and responsible innovation. </p>

To ensure these critical insights would have a lasting impact, we collaborated with iZJU-China to co-author the *iGEM Safety Standard for Engineered Live Biotherapeutic Products (LBPs)*, a comprehensive guide designed by iGEMers, for iGEMers. This standard translates professional regulatory principles into a rigorous yet feasible framework for the iGEM context, designed to instill a "regulatory mindset" in participants.

The standard is built on a clear, five-part structure:
*  **Part I & II (Foundational Principles and CMC):** Establish core safety principles and adapt professional Chemistry, Manufacturing, and Controls (CMC) concepts for the iGEM lab, focusing on chassis selection, genetic payload design, and stability. 
*  **Part III (Biocontainment):** Advocates for the design and validation of active biocontainment systems, such as kill switches or engineered auxotrophy, to prevent environmental release. 
*  **Part IV (Non-Clinical Safety):** Provides a framework for direct experimental safety testing, recommending *in vitro* cytotoxicity assays on human cell lines to assess the final product's safety profile. 
*  **Part V (Documentation and Responsibility):** Encourages the compilation of a "Safety Dossier" and reflection on ethical considerations, including potential dual-use. 
<iframe 
    src="https://static.igem.wiki/teams/5870/safety/igem-safety-standard.pdf"
    width="100%" 
    height="800px"
    style="border: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
    title="iGEM Safety Standard for Engineered Live Biotherapeutic Products">
</iframe>

By creating and sharing this standard, we aim to equip future teams with a practical framework that elevates both the safety and scientific rigor of their work, fostering a stronger culture of responsibility across the entire iGEM community.
 <br />
   
##### Reference
   
<span class="space-content reference">
   
---

1.  <span id="ref1"> **Li L, Abou-Samra E, Ning Z, et al.** An in vitro model maintaining taxon-specific functional activities of the gut microbiome. *Nat Commun*. 2019;10(1):4146. Published 2019 Sep 12. doi:10.1038/s41467-019-12087-8 [↖](#back1)</span>
2.  <span id="ref2"> **Moe-Behrens GH, Davis R, Haynes KA.** Preparing synthetic biology for the world. *Front Microbiol*. 2013;4:5. Published 2013 Jan 25. doi:10.3389/fmicb.2013.00005 [↖](#back2)</span>
3.  <span id="ref3"> **Zhou P, Xie W, Yao Z, Zhu Y, Ye L, Yu H.** Development of a temperature-responsive yeast cell factory using engineered Gal4 as a protein switch. *Biotechnol Bioeng*. 2018;115(5):1321-1330. doi:10.1002/bit.26544 [↖](#back3)</span>
4.  <span id="ref4"> **Dong MM, Li YX, Xu M, et al.** An Escherichia coli Nissle 1917-based live therapeutics platform with integrated phage resistance and programmable temperature sensitivity. *J Control Release*. Published online September 2, 2025. doi:10.1016/j.jconrel.2025.114188 [↖](#back4)</span>
5.  <span id="ref5"> **Homma T, Iwahashi H, Komatsu Y.** Yeast gene expression during growth at low temperature. *Cryobiology*. 2003;46(3):230-237. doi:10.1016/s0011-2240(03)00028-2 [↖](#back5)</span> 
6.  <span id="ref6"> **Hedin KA, Kruse V, Vazquez-Uribe R, Sommer MOA.** Biocontainment strategies for in vivo applications of Saccharomyces boulardii. *Front Bioeng Biotechnol*. 2023;11:1136095. Published 2023 Feb 20. doi:10.3389/fbioe.2023.1136095  [↖](#back6)</span>
7.  <span id="ref7"> **Stirling F, Bitzan L, O'Keefe S, et al.** Rational Design of Evolutionarily Stable Microbial Kill Switches. *Mol Cell*. 2017;68(4):686-697.e3. doi:10.1016/j.molcel.2017.10.033 [↖](#back7)</span>
8.  <span id="ref8"> **Winston F, Dollard C, Ricupero-Hovasse SL.** Construction of a set of convenient *Saccharomyces cerevisiae* strains that are isogenic to S288C. *Yeast*. 1995;11(1):53-55. doi:10.1002/yea.320110107 [↖](#back8)</span>
9.  <span id="ref9"> **Brachmann CB, Davies A, Cost GJ, et al.** Designer deletion strains derived from Saccharomyces cerevisiae S288C: a useful set of strains and plasmids for PCR-mediated gene disruption and other applications. Yeast. 1998;14(2):115-132. doi:10.1002/(SICI)1097-0061(19980130)14:2<115::AID-YEA204>3.0.CO;2-2 [↖](#back9)</span> 
10.  <span id="ref10"> **Kowalski LR, Kondo K, Inouye M.** Cold-shock induction of a family of TIP1-related proteins associated with the membrane in *Saccharomyces cerevisiae*. *Mol Microbiol*. 1995;15(2):341-353. doi:10.1111/j.1365-2958.1995.tb02248.x [↖](#back10)</span>
11. <span id="ref11"> **Natesan S, Gilman MZ.** DNA bending and orientation-dependent function of YY1 in the c-fos promoter. *Genes Dev*. 1993;7(12B):2497-2509. doi:10.1101/gad.7.12b.2497 [↖](#back11)</span> 
12. <span id="ref12"> **Greenhalf W, Stephan C, Chaudhuri B.** Role of mitochondria and C-terminal membrane anchor of Bcl-2 in Bax induced growth arrest and mortality in *Saccharomyces cerevisiae*. *FEBS Lett*. 1996;380(1-2):169-175. doi:10.1016/0014-5793(96)00044-0 [↖](#back12)</span> 
13. <span id="ref13"> **Khoury CM, Greenwood MT.** The pleiotropic effects of heterologous Bax expression in yeast. *Biochim Biophys Acta*. 2008;1783(7):1449-1465. doi:10.1016/j.bbamcr.2007.12.013 [↖](#back13)</span>
14. <span id="ref14"> **Priault M, Camougrand N, Kinnally KW, Vallette FM, Manon S.** Yeast as a tool to study Bax/mitochondrial interactions in cell death. *FEMS Yeast Re*s. 2003;4(1):15-27. doi:10.1016/S1567-1356(03)00143-0 [↖](#back14)</span>
15. <span id="ref15"> **Sikorski RS, Hieter P.** A system of shuttle vectors and yeast host strains designed for efficient manipulation of DNA in Saccharomyces cerevisiae. *Genetics*. 1989;122(1):19-27. doi:10.1093/genetics/122.1.19 [↖](#back15)</span>
