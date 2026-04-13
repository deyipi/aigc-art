### Sensory System

---

#### Abstract

Random secretion of therapeutic proteins by our engineered yeast could lead to potentially harmful consequences. To address this, we designed several sensory modules based on modified endogenous yeast mating pathways, thereby equipping the engineered yeast with the ability to specifically recognize gastric *H. pylori* biomarkers and release therapeutic proteins in response. Specifically, we reengineered the yeast mating factor pathway by replacing its native agonist with one of the biomarkers, N<sup>α</sup>-methylhistamine (NAMH). In response to NAMH, the pathway activates its intrinsic G-protein signaling cascade, thereby inducing gene expression under the control of the downstream promoter pFUS1. Collectively, our findings present an effective strategy for biomarker-responsive sensing and the targeted elimination of gastric *H. pylori*.

#### Background

*H. pylori* infection elevates specific biomarkers within the gastric niche. One is N<sup>α</sup>-methylhistamine (NAMH), present in the mucosa of *H. pylori* infected patients and very low in non-infected patients or after eradication of *H. pylori* <sup id="back1">[1](#ref1)</sup>.

We hope to develop a NAMH-activated genetic switch to trigger the downstream therapy system. AiiA is believed to effectively inhibit *H. pylori* biofilm formation and likely to block the virulence proteins on *H. pylori* <sup id="back2">[2](#ref2)</sup> <sup id="back3">[3](#ref3)</sup>. In our yeast, AiiA is designed to be secreted as the main destructor against  *H. pylori* biofilm.  

The Sensing Module consists of a heterologous GPCR signaling pathway that allows for NAMH detection into targeted therapeutic action, coupling the histamine receptor to the endogenous yeast mating pathway, and finally drives the expression of the mating-responsive pFUS1 promoter, secreting the therapeutic AiiA enzyme.

##### Integrated Validation Strategy

We aimed to achieve mutual validation and supplementation between dry lab and wet lab results: wet lab experiments provide empirical validation of the biological system's functionality, while dry lab simulations predict the structure and efficacy of different GPCRs.

##### Workflow for Biosensor Construction and Validation

The implementation of the sensing system followed a structured engineering workflow. Our overall strategy involved engineering the native yeast mating pathway by knocking out the endogenous receptor gene *STE2* to eliminate background signaling and the inhibitory GTPase gene *SST2* to improve the signalling efficiency, and then introducing our customized genetic modules to achieve a NAMH-responsive system.

We first designed and synthesized plasmid components encoding different histamine GPCRs, the modified chimeric Gα proteins (Gpa1), and the reporter or therapeutic genes (mCherry/AiiA), under the control of the pathway-responsive promoter pFUS1, all of which based on the sequences that literatures provide <sup id="back4">[4](#ref4)</sup>,<sup id="back5">[5](#ref5)</sup>,<sup id="back6">[6](#ref6)</sup>,<sup id="back7">[7](#ref7)</sup>,<sup id="back8">[8](#ref8)</sup>. Each plasmid was assembled using In-Fusion assembly methods and subsequently transformed into the corresponding chassis organism.

Positive clones were selected on appropriate antibiotic media or dropout media and initially validated by colony PCR to confirm the presence and size of the inserts, and then sequenced to ensure full identity. 

In the preliminary validation experiments, histamine was employed as the inducer to activate reporter gene expression, because histamine functions as an agonist compatible with multiple histamine receptor subtypes and is more readily accessible compared with NAMH. Therefore, functional validation was performed by inducing the transformed yeast with histamine and quantitatively measuring the output response, which in the case of the reporter construct was the induction of mCherry fluorescence.

#### Results

##### Recovery and Plating of Core Strains and Plasmids

Core yeast strains and constructed plasmids were successfully recovered on plates. 

###### Knockout Plasmid

<img src="https://static.igem.wiki/teams/5870/results/sensory/pml104-transform.avif" alt="sensory/pML104_transform.jpg" style="zoom:25%;" /><p class="figure-caption"><b>Figure 1: </b>*E. coli* library with pML104 plasmids.</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/d-sgrna-transform.webp" alt="sensory/d-sgRNA_transform.jpg" style="zoom:25%;" /><p class="figure-caption"><b>Figure 2: </b>*E. coli* library with d-sgRNA genes.</p>

###### Sensory System Plasmid

<img src="https://static.igem.wiki/teams/5870/results/sensory/initial-recovery.webp" alt="sensory/sensory_system/Initial_recovery.png" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 3: </b>Plate of the strain carrying the initial plasmids for modified vectors.</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/recovery-histamine.webp" alt="sensory/Recovery_Histamine.png" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 4: </b>*E. coli* library for human histamine receptors. From A to D correspond to hH1R to hH4R, respectively.</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/terminal-3-plasmid.webp" alt="sensory/sensory_system/terminal_3_plasmid.png" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 5: </b>Plate of the strain carrying the terminal plasmids.</p>

##### Plasmid construction

###### Knockout plasmid

We successfully identified the initial vector and fragments required for knockout plasmid construction.

<img src="https://static.igem.wiki/teams/5870/results/sensory/knockout-pcr.svg" alt="sensory/sensory/knockout/knockout_PCR.svg" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 6: </b>Electrophoresis results for KanMx4 and sgRNA.</p>

We successfully linearized the initial vector, pML104, into two fragments using two primer pairs. These fragments were then joined with the corresponding inserts via In-Fusion cloning to assemble the final knockout plasmid. The assembled plasmid was successfully transformed into *E. coli* DH5α, yielding transformants. Sequencing confirmed the successful construction of the knockout plasmid.

<img src="https://static.igem.wiki/teams/5870/results/sensory/pmlab.svg" alt="sensory/knockout/pMLAB.svg" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 7: </b>Electrophoresis results for linearized pML104.</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/knockout-tranformat.webp" alt="sensory/knockout/knockout_tranformat.png" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 8: </b>Transformation of the knockout plasmid into *E. coli* DH5α.</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/knockout-sequencing.avif" alt="sensory/knockout/knockout_sequencing.svg" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 9:</b> Sequencing results of the knockout plasmid.</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/knockout-yeast.avif" alt="sensory/knockout/knockout_yeast.jpg" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 10: </b>Transformation of the knockout plasmid into yeast.</p>

###### Sensory System Plasmid

We successfully identified the initial vector and fragments required for sensory system plasmid construction.

<img src="https://static.igem.wiki/teams/5870/results/sensory/initial-pcr.avif" alt="sensory/sensory_system/initial_PCR.png" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 11: </b> Electrophoresis results for the initial plasmids used for modified vector construction.</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/h1-4r-pcr.svg" alt="sensory/sensory_system/H1-4R_PCR.svg" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 12: </b>Electrophoresis results for hH1R to hH4R.</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/chimeric-gpcr-pcr.svg" alt="sensory/sensory_system/Chimeric_GPCR_PCR.svg" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 13: </b>Electrophoresis results for Chimeric GPCR. </p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/gap1-c5-identify.svg" alt="sensory/sensory_system/GAP1ΔC5_identify.svg" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 14: </b>Electrophoresis results  for GAP1ΔC5.</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/tereminal-3.avif" alt="sensory/sensory_system/GAP1ΔC5_identify.svg" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 15: </b>Electrophoresis results  for P2Y2-P2A-Gpa, hH3R-P2A-Gpai, hH3R-P2A-mCherry.</p>

Following the synthesis schematic, the initial vector was linearized and assembled with the corresponding fragments via In-Fusion cloning to generate the intermediate vectors, pESC-URA-MatRep-pGAP and pESC-HIS-pGAP-αMF. Both assembled intermediate vectors were subsequently transformed into *E. coli* DH5α, yielding transformants. The successful construction of both intermediate plasmids was verified by PCR analysis.

<img src="https://static.igem.wiki/teams/5870/results/sensory/modified-vector.avif" alt="sensory/sensory_system/modified_vector.png" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 16: </b>Electrophoresis results for intermediate vector construction.</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/modified-vector-plate.avif" alt="sensory/sensory_system/modified_vector_plate.png" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 17: </b>Transformation results of intermediate vector construction.</p>


Following the synthesis schematic, the intermediate vectors were linearized and subsequently joined with their respective fragments via In-Fusion Assembly to yield the terminal plasmids. The assembled terminal plasmids were successfully transformed into *E. coli* DH5α, generating transformants. Gene sequencing results confirmed the successful construction of 10 out of the 14 target terminal plasmids.

<img src="https://static.igem.wiki/teams/5870/results/sensory/plasmid-plate.avif" alt="sensory/plasmid_plate.png" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 18: </b>Transformation of the terminal plasmids into *E. coli* DH5α.

</p>

<img src="https://static.igem.wiki/teams/5870/results/sensory/sequencing.svg" alt="sensory/sequencing.svg" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 19: </b>Sequencing results of the terminal plasmids.</p>

Plasmids were extracted from the transformants and transformed into yeast, followed by screening on the corresponding selective medium. The results demonstrated that we successfully obtained yeast single colonies with successful transformation, which can be used for subsequent screening and functional verification experiments.

<img src="https://static.igem.wiki/teams/5870/results/sensory/plasmid-yeast-plate.avif" alt="sensory/sensory_system/plasmid_yeast_plate.png" style="zoom: 25%;" /><p class="figure-caption"><b>Figure 20: </b>The terminal plasmid was transformed into the knockout yeast strain.</p>


##### Functional Validation

We induced the transformed yeast with histamine and quantitatively measuring the output response to confirm whether the sensory system functions as expected, and to select the most successfully modified GPCR for *H. pylori* detection. 

Using mcherry as reporter gene, we tested strategies of modifying yeast signaling pathway by recording and comparing fluorescence data and OD<sub>600</sub> data of our yeast. 

###### Growth

We also recorded OD 600 for each type of yeast, in case the growth of yeast would influence fluorescence result. However, the OD 600 curve of our yeast turned out to be normal. 

<img src="https://static.igem.wiki/teams/5870/results/sensory/od-1.svg" alt="sensory/OD.svg" style="zoom:50%;" /><p class="figure-caption"><b>Figure 21: </b>The OD-time curves of yeast transformed with the sensory system plasmid were demonstrated under varying histamine concentrations, as well as the OD-time curves of yeast transformed with the P2Y2 plasmid under different dATP concentrations.</p>


###### Fluorescence

We examined the fluorescence data every 20 minutes within 8 hours of cultivation. The result is shown as follows.

We also used the system of 2022 NEU iGEM team as a positive control, but the result did not come exactly as expected, either.

<img src="https://static.igem.wiki/teams/5870/results/sensory/rf-1.svg" alt="sensory/RF.svg" style="zoom:50%;" /><p class="figure-caption"><b>Figure 22: </b>The RF-time curves of yeast transformed with the sensory system plasmid were presented under varying histamine concentrations, as well as the RF-time curves of yeast transformed with the P2Y2 plasmid under different dATP concentrations.</p> 

We can see the receptor did not show obvious response to histamine gradient, and this result will be later discussed.


#### Discussion

Molecular dynamics simulations performed in our dry-lab provided preliminary validation of the overall feasibility of our design. Nevertheless, the results obtained from subsequent experimental verification did not fully meet our expectations. Specifically, even in the absence of histamine, we observed a time-dependent increase in fluorescence intensity, and this trend appeared to be largely independent of histamine concentration. These findings suggest that the downstream promoter of our engineered GPCR exhibits undesired transcriptional leakage, resulting in basal gene expression under non-induced conditions. Such leaky expression likely contributed to substantial background noise, thereby obscuring the authentic histamine-induced signaling response.

In our current framework, mathematical approaches alone are insufficient to effectively eliminate this background signal. Consequently, future work will focus on enhancing the responsiveness and signal specificity of the system by mitigating promoter leakage. For chimeric GPCR, we learned that overexpression of the G protein α-subunit (Gpa1) has been validated as an effective strategy for suppressing background noise<sup id="back9">[9](#ref9)</sup>. Gpa1 can attenuate the basal activity of the signaling pathway, thereby reducing background fluorescence and improving the signal-to-noise ratio. We plan to adopt this approach in future experiments to further optimize our system. Other potential strategy includes incorporating additional regulatory logic elements—such as CASwitch-based genetic circuits <sup id="back10">[10](#ref10)</sup>—which can strongly suppress basal transcriptional activity in the absence of an inducer. In parallel, we aim to explore alternative signaling pathways to identify optimized configurations with reduced noise and improved dynamic range. Screening additional combinations of G proteins with human GPCRs will also be included in our future research plans.

Moreover, the present dataset does not allow us to definitively exclude technical factors that may have contributed to the observed discrepancies, such as incomplete deletion of the *Ste2* or *Sst2 gene* within the yeast mating pathway, which could result in unintended signaling. We are also considering knocking out additional genes involved in the yeast mating factor signaling pathway, such as *FAR1*, as the expression of these genes may interfere with the proper function of the engineered signaling pathway. Additional experiments will therefore be conducted to systematically investigate these possibilities and to clarify the underlying causes of the unexpected results. Through these efforts, we aim to iteratively refine the system toward a more robust and tightly regulated biosensing platform.

##### Outlook

Through the combined use of molecular dynamics simulations and preliminary histamine-based wet-lab screening, we have identified several potential engineering configurations. After further optimization of the sensory system to minimize background noise and achieve stable readouts, we will perform final validation using NAMH as the target biomarker.

Beyond NAMH, our design concept can be extended to a broader range of biomarkers to enhance detection reliability and sensitivity. Future work will also focus on refining the engineered signaling pathways for improved precision and dynamic control. Ultimately, we aim to establish a cost-effective and efficient engineering strategy that enables robust, biomarker-dependent gene expression in the yeast chassis under *H. pylori*–specific induction. This goal represents the central direction of our forthcoming experimental and system optimization efforts.

##### Reference
   
   <span class="space-content reference">
   
   ---
   
1. <span id="ref1"> **Courillon-Mallet A, Launay JM, Roucayrol AM, et al.** *Helicobacter pylori* infection: physiopathologic implication of N alpha-methyl histamine. *Gastroenterology*. 1995;108(4):959-966. doi:10.1016/0016-5085(95)90190-6 [↖](#back1)</span>

2. <span id="ref2"> **Gopalakrishnan V, Saravanan V, Mahendran MIMS, Kumar MPN.** *Helicobacter pylori* biofilm interference by N-acyl homoserine lactonases: in vitro and in silico approaches. *Mol Biol Rep*. 2024;51(1):1106. Published 2024 Oct 30. doi:10.1007/s11033-024-10013-w [↖](#back2)</span>

3. <span id="ref3"> **Liang Z, Deng X, Guo K, et al.** Characterization of quorum quenching enzyme AiiA and its potential role in strawberry preservation. *Food Res Int*. 2025;207:116059. doi:10.1016/j.foodres.2025.116059 [↖](#back3)</span>

4. <span id="ref4"> **Dong S, Rogan SC, Roth BL.** Directed molecular evolution of DREADDs: a generic approach to creating next-generation RASSLs. *Nat Protoc*. 2010;5(3):561-573. doi:10.1038/nprot.2009.239 [↖](#back4)</span>

5. <span id="ref5">  **Zhang X, Liu G, Zhong YN, et al.** Structural basis of ligand recognition and activation of the histamine receptor family. *Nat Commun*. 2024;15(1):8296. Published 2024 Sep 27. doi:10.1038/s41467-024-52585-y [↖](#back5)</span>

6. <span id="ref6">  **Velazhahan V, Ma N, Pándy-Szekeres G, et al.** Structure of the class D GPCR Ste2 dimer coupled to two G proteins. *Nature*. 2021;589(7840):148-153. doi:10.1038/s41586-020-2994-1 [↖](#back6)</span>

7. <span id="ref7">  **Schulz R, Korkut-Demirbaş M, Venturino A, Colombo G, Siegert S.** Chimeric GPCRs mimic distinct signaling pathways and modulate microglia responses.*Nat Commun*. 2022;13(1):4728. Published 2022 Aug 15. doi:10.1038/s41467-022-32390-1 [↖](#back7)</span>

8. <span id="ref8">  **Watanabe A, Nakajima A, Shiroishi M.** Recovery of the histamine H3 receptor activity lost in yeast cells through error-prone PCR and in vivo selection. *Sci Rep*. 2023;13(1):16127. Published 2023 Sep 26. doi:10.1038/s41598-023-43389-z [↖](#back8)</span>

9. <span id="ref9">  **Fan C, Yuan J.** Reshaping the yeast galactose regulon via GPCR signaling cascade. *Cell Rep Methods*. 2023;3(12):100647. doi:10.1016/j.crmeth.2023.100647[↖](#back9)</span>

10. <span id="ref10"> **De Carluccio G, Fusco V, di Bernardo D.** Engineering a synthetic gene circuit for high-performance inducible expression in mammalian systems.*Nat Commun*. 2024;15(1):3311. Published 2024 Apr 17. doi:10.1038/s41467-024-47592-y [↖](#back10)</span>
   </span>
