#### Chassis Strain: Providing a comfortable therapeutic approach

We selected *Saccharomyces boulardii* CNCM I-745 as our chassis organism. The optimal growth temperature of *S. boulardii* corresponds to the human host temperature (37°C), and it is resistant to gastric acid (survival rate of 75% at pH 2). It is also resilient to the conditions of the stomach and lower intestines. Furthermore, as the only commercially available probiotic yeast, *S. boulardii* is clinically safe with no severe adverse reactions<sup id="back1">[1](#ref1)</sup>.

Current research has demonstrated that *S. boulardii*  can improve eradication rates and reduce side effects when used as an adjunct to antibiotic therapy for *Helicobacter pylori*. For example, when combined with triple therapy, the eradication rate is higher than with triple therapy alone, and side effects such as diarrhea are less frequent. Additionally, when used alongside bismuth quadruple therapy or vonoprazan-based quadruple therapy, *S. boulardii*  can also enhance eradication rates and reduce recurrence<sup id="back2">[2](#ref2)</sup>.

The selection of *Saccharomyces boulardii* as the chassis organism is aimed at providing a more patient-friendly probiotic treatment approach.

#### Sensory System: Specifically responding to *Helicobacter pylori*

Since *Helicobacter pylori* releases a unique signaling molecule, Nα-methylhistamine, which can bind with high affinity to human histamine receptor type 3<sup id="back3">[3](#ref3)</sup>. Accordingly we aimed to design and verify a GPCR-based sensing pathway to detect N-α-methylhistamine, thereby mediating the expression and secretion of downstream therapeutic system proteins.

Since almost no engineered yeast GPCR capable of recognizing N-α-methylhistamine has been reported to date, we designed two potential strategies for constructing the sensing system. The first approach is based on the concept of chimerizing the extracellular domain of a human GPCR receptor with the intracellular domain of a yeast mating factor signaling pathway GPCR receptor, inspired by the work of Schulz et al. (2022)<sup id="back4">[4](#ref4)</sup>. The second approach involves "yeastlizing" a human GPCR receptor in yeast, inspired by Scott et al. (2021)<sup id="back5">[5](#ref5)</sup>, aiming to modify the G-protein to enable the human GPCR receptors to function effectively in yeast.

#### Therapeutic System: Breaking through the barrier of drug resistance

We constructed a therapeutic system mediated by a sensing pathway for the secretion of AiiA protein. Previous studies have demonstrated that AiiA can inhibit *Helicobacter pylori* biofilm formation: experiments have shown that at certain concentrations, AiiA significantly reduces biofilm biomass and thickness, decreases urease and polysaccharide levels, and disrupts biofilm formation through quorum quenching. Additionally, molecular docking studies revealed that AiiA interacts with virulence factors such as BabA with high affinity, interfering with bacterial adhesion and motility<sup id="back6">[6](#ref6)</sup>.

By constructing a therapeutic system centered around the AiiA protein, we present a novel approach to combat *Helicobacter pylori* that addresses the issue of antibiotic resistance.

![sensory-therapeutic](https://static.igem.wiki/teams/5870/design/sensory-therapeutic.webp)

#### Adhesion System: Exerting prolonged functional effects

In the constantly moving gastric environment, to prolong the yeast's action time on *H. pylori*, we designed the Adhesion System to ensure the engineered yeast maintains close proximity to Hp, thereby improving efficiency.

We selected the N-terminal adhesion domain of the human gastric epithelial protein hCEACAM1, which is targeted by the *H. pylori* virulence protein HopQ, as our specific adhesion molecule<sup id="back7">[7](#ref7)</sup>. This careful choice enables us to 'beat the bacteria at their own game.Additionally, the selection of the human protein hCEACAM1 effectively reduces the immunogenicity of the engineered yeast, thereby enhancing the overall safety.

![adhesion](https://static.igem.wiki/teams/5870/design/adhesion.webp)

#### Delivery System: Effectively reaching the *Helicobacter pylori* colonization niche

To effectively breakthrough the two major obstacles preventing the drug from reaching the Hp infection site-the stomach's strong acidic environment and the thick mucus layer-we designed the delivery system to help the microspheres penetrate the mucus layer and reach the deep site where Hp aggregates. 

The engineered yeast was encapsulated in calcium alginate gel via an emulsification method. This gel exhibits stability under acidic conditions while undergoing dissolution in a neutral environment<sup id="back8">[8](#ref8)</sup>. As a result, it effectively shields the yeast in the gastric acid milieu and facilitates controlled release upon degradation upon reaching the nearly neutral pH of the deep gastric mucosa, where *Helicobacter pylori* is known to colonize. We also introduced an asymmetric calcium carbonate structure, enabling the microspheres to react with gastric acid to produce gas. We constructed of the micromotors via microfluidic method<sup id="back9">[9](#ref9)</sup>. Additionally, we established a macroscopic model of the microspheres using a capillary injection method, demonstrating the effectiveness of the microsphere propulsion system in vitro.
By constructing the delivery system, yeast-gel microspheres can be propelled into the gastric mucosal microenvironment, where *H. pylori* colonizes.

![delivery](https://static.igem.wiki/teams/5870/design/delivery.webp)

#### Suicide System

Biosafety is of crucial importance in synthetic biology research and applications. As a core prerequisite for ensuring that engineered organisms do not pose environmental risks or cause gene leakage, biosafety has been incorporated as a key consideration in our overall scheme.

To establish a reliable biocontainment system, we conducted systematic investigations and evaluations on the design of the suicide system: initially, we analyzed the differences in parameters (such as temperature, oxygen, pH, and light) between the gastric mucus layer and the external natural environment, and based on these differences, we screened for potential trigger signals. Subsequently, we verified the feasibility of each signal one by one—for instance(such as pH , light-inducible and oxygen signals).

Ultimately, by considering both signal reliability and practical application scenarios, we identified temperature as the core trigger factor and combined it with a nutrient auxotrophy mechanism. Our suicide system adopts a "double insurance" strategy: the primary mechanism is an active cold-inducible suicide switch, which ensures that yeast cells trigger programmed cell death when excreted from the body and exposed to temperature drops; the secondary mechanism is a passive fail-safe system based on the inherent quadruple auxotrophy of the strain (incapable of synthesizing essential nutrients such as histidine and leucine). 
 
 [↗ Read the comprehensive description of the safety design on our safety page.](https://2025.igem.wiki/peking/safety-and-security/)


#### Proof of Concept

Due to certain objective constraints, we were unable to obtain *S.boulardii* with nutritional deficiencies within the iGEM competition timeframe. For biosafety reasons, we chose *S. cerevisiae* as a substitute for all gene editing components during the proof-of-concept phase. The feasibility of this decision was carefully considered: *S. boulardii* shares a high genetic similarity with *Saccharomyces cerevisiae*, with both organisms having the same karyotype. Molecular typing (PFGE, RAPD-PCR, RFLP) shows that *S. boulardii* clusters within the *S. cerevisiae* species<sup id="back10">[10](#ref10)</sup>.

##### Sensory system

For the validation of the sensory system, we designed a proof-of-concept strategy where wet lab and dry lab experiments complement each other: wet lab experiments provide empirical validation of the biological system's functionality, while dry lab simulations predict the structure and efficacy of different chimeric GPCRs. By using dry lab computational screening for theoretical prioritization, we can provide guidance for the experimental validation of selected constructs in the wet lab and help prioritize future experiments.

We selected mCherry, controlled by the pathway-responsive promoter pFUS1, as the reporter gene. After assembling the required plasmids, positive clones were selected using appropriate antibiotic or dropout media and initially validated by colony PCR to confirm the presence and size of the inserts. Histamine was used as the inducer to activate the expression of the reporter gene. Functional validation and screening were subsequently performed by inducing the transformed yeast with histamine and quantitatively measuring the fluorescence response as the output.

##### Therapeutic System

In the therapeutic system, We established a crystal violet staining assay to evaluate the inhibitory effects of yeast co-culture and exogenous AiiA protein treatment on biofilm formation.

For the validation experiments of the therapeutic system, it is necessary to simulate biofilm formation. Due to safety considerations, we selected *Pseudomonas aeruginosa* PAO1 as a surrogate for *H. pylori*. The feasibility of this substitution has also been carefully considered: *H. pylori* presents higher biosafety risks and is more challenging to handle in standard laboratory settings, while *P. aeruginosa* has been widely used as a model organism in biofilm research due to its well-characterized quorum sensing systems and robust biofilm-forming capacity<sup id="back11">[11](#ref11)</sup>.

##### Adhesion System

To verify the functionality of the adhesion system, we designed and established a modified Immunocytofluorescence (ICF) assay to assess the binding capacity of the C1ND-Sed1 fusion protein to its adhesion target, HopQ.

##### Delivery System

After encapsulating the yeast in calcium alginate gel using the emulsification method, we measured and statistically analyzed the diameter of the gel microspheres, captured scanning electron microscope (SEM) images to illustrate their physical structure, and evaluated their pH responsiveness under different pH conditions. 

Subsequently, we established the macroscopic model of the microspheres and tested the effectiveness of the microsphere propulsion system in vitro under simulated gastric acid conditions.

<br />

##### Reference

<span class="space-content reference">

---
1. <span id="ref1"> **Pais P, Almeida V, Yılmaz M, Teixeira MC.** *Saccharomyces boulardii*: What Makes It Tick as Successful Probiotic?. *J Fungi (Basel)*. 2020;6(2):78. Published 2020 Jun 4. doi:10.3390/jof6020078 [↖](#back1)</span>
2. <span id="ref2"> **Zhao Y, Yang Y, Aruna, et al.** Saccharomyces boulardii Combined With Quadruple Therapy for *Helicobacter pylori* Eradication Decreased the Duration and Severity of Diarrhea: A Multi-Center Prospective Randomized Controlled Trial. *Front Med (Lausanne)*. 2021;8:776955. Published 2021 Nov 18. doi:10.3389/fmed.2021.776955 [↖](#back2)</span>
3. <span id="ref3"> **Courillon-Mallet A, Launay JM, Roucayrol AM, et al.** Helicobacter pylori infection: physiopathologic implication of N alpha-methyl histamine. *Gastroenterology*. 1995;108(4):959-966. doi:10.1016/0016-5085(95)90190-6 [↖](#back3)</span>
4. <span id="ref4"> **Schulz R, Korkut-Demirbaş M, Venturino A, Colombo G, Siegert S.** Chimeric GPCRs mimic distinct signaling pathways and modulate microglia responses. *Nat Commun*. 2022;13(1):4728. Published 2022 Aug 15. doi:10.1038/s41467-022-32390-1 [↖](#back4)</span>
5. <span id="ref5"> **Scott BM, Gutiérrez-Vázquez C, Sanmarco LM, et al.** Self-tunable engineered yeast probiotics for the treatment of inflammatory bowel disease. *Nat Med*. 2021;27(7):1212-1222. doi:10.1038/s41591-021-01390-x [↖](#back5)</span>
6. <span id="ref6"> **Gopalakrishnan V, Saravanan V, Mahendran MIMS, Kumar MPN.** *Helicobacter pylori* biofilm interference by N-acyl homoserine lactonases: in vitro and in silico approaches.*Mol Biol Rep*. 2024;51(1):1106. Published 2024 Oct 30. doi:10.1007/s11033-024-10013-w [↖](#back6)</span>
7. <span id="ref7"> **Javaheri A, Kruse T, Moonens K, et al.** Helicobacter pylori adhesin HopQ engages in a virulence-enhancing interaction with human CEACAMs. *Nat Microbiol*. 2016;2:16189. Published 2016 Oct 17. doi:10.1038/nmicrobiol.2016.189 [↖](#back7)</span>
8. <span id="ref8"> **Anal AK, Bhopatkar D, Tokura S, Tamura H, Stevens WF.** Chitosan-alginate multilayer beads for gastric passage and controlled intestinal release of protein. *Drug Dev Ind Pharm*. 2003;29(6):713-724. doi:10.1081/ddc-120021320 [↖](#back8)</span>
9. <span id='ref9'> **Zhao LB, Pan L, Zhang K, et al.** Generation of Janus alginate hydrogel particles with magnetic anisotropy for cell encapsulation. *Lab Chip*. 2009;9(20):2981-2986. doi:10.1039/b907478c [↖](#back9)</span>
10. <span id="ref10"> **Edwards-Ingram L, Gitsham P, Burton N, et al.** Genotypic and physiological characterization of Saccharomyces boulardii, the probiotic strain of Saccharomyces cerevisiae. *Appl Environ Microbiol*. 2007;73(8):2458-2467. doi:10.1128/AEM.02201-06 [↖](#back10)</span>
11. <span id="ref11"> **Vetrivel A, Ramasamy M, Vetrivel P, Natchimuthu S, Arunachalam S, Kim G-S, Murugesan R.** Pseudomonas aeruginosa Biofilm Formation and Its Control. *Biologics*. 2021; 1(3):312-336. https://doi.org/10.3390/biologics1030019 [↖](#back11)</span>