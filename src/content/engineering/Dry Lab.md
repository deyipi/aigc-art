### Big Cycle 1: Mathematical Modeling of Microsphere Diffusion and Adhesion in the Stomach

In this Big Cycle, we aimed to construct a mathematical model describing the diffusion and adhesion of gel microspheres in the stomach. Through multiple D-B-T-L iterations, we gradually improved the realism of the gastric environment and refined the simulation of microsphere behavior.

---

#### D-B-T-L: Simulation of Gastric Diffusion

##### Design
Initially, we wanted to simulate the diffusion of gel microspheres in the stomach.

##### Build
Therefore, we used Python to build a simple gastric diffusion model.

##### Test
After visualization, we found that our model over-idealized the shape of the stomach (as a square) and might not be realistic enough.

![Figure 1](https://static.igem.wiki/teams/5870/engineering/drylab/figure-200s.webp)

<p class="figure-caption"><b>Figure 1: </b> Initial model of diffusion in stomach.</p>

##### Learn
We then decided to improve the model step by step, first refining the shape of the stomach to be more realistic.

---

#### D-B-T-L: Parametric Stomach Modeling

##### Design
After improvement, we aimed to obtain a model closer to the real stomach shape.

##### Build
We used parametric equations to describe the shape of the stomach and obtained a result that was relatively realistic. 

![Figure 2](https://static.igem.wiki/teams/5870/engineering/drylab/stomach-shape.webp)

<p class="figure-caption"><b>Figure 2:</b> Using parametric equations to describe the shape of the stomach.</p>


##### Test
Then, we performed the simulation again and obtained the following results:

![Figure 3](https://static.igem.wiki/teams/5870/engineering/drylab/snapshot-841s.webp)

<p class="figure-caption"><b>Figure 3:</b> Wrong fluid velocity field.</p>

##### Learn
We found that because the greater and lesser curvatures of the stomach are not mutually injective with respect to y and x, there were problems when simulating the velocity field.

---

#### D-B-T-L: Improved Velocity Field Simulation

##### Design
Finally, we aimed to better simulate the velocity field of gastric fluid during diffusion.

##### Build
We rewrote the program using the PLT path method.

##### Test
We visualized the velocity field to check the accuracy of flow simulation. 

![Figure 4](https://static.igem.wiki/teams/5870/engineering/drylab/flow-field.webp)
 
<p class="figure-caption"><b>Figure 4:</b> Improved velocity field in stomach model.</p>

##### Learn
After several iterations, we finally obtained a more reasonable model to simulate the diffusion process in the stomach.

---

### Big Cycle 2: Adhesion System Modeling

This Big Cycle focuses on modeling and analyzing the adhesion mechanism between HopQ and C1ND proteins to understand the molecular interactions and stability under physiological conditions.

---

#### D-B-T-L: Static Structure Analysis

##### Design
Initially, we aimed to analyze the binding between HopQ and C1ND.

##### Build
We obtained the sequences of the two protein complexes and studied their interactions such as hydrogen bonds.

##### Test
After preliminary analysis, we realized that static interaction analysis cannot provide quantitative evidence or simulate physiological conditions.
 
![Figure 4](https://static.igem.wiki/teams/5870/engineering/drylab/flow-field.webp)

<p class="figure-caption"><b>Figure 4:</b> Improved velocity field in stomach model.</p>

![Figure 5](https://static.igem.wiki/teams/5870/engineering/drylab/static-structure.webp)

<p class="figure-caption"><b>Figure 5:</b>  Static structure of HopQ and C1ND.</p> 

##### Learn
We decided to turn to molecular dynamics (MD) simulations for dynamic analysis.

---

#### D-B-T-L: Molecular Dynamics Simulation

##### Design
After reflection, we used GROMACS to perform MD simulations to analyze the binding of HopQ and C1ND under physiological conditions.

##### Build
We prepared the protein complex system and parameterized it for MD simulation.  

![Figure 6](https://static.igem.wiki/teams/5870/engineering/drylab/molecular-dynamic-preparation.webp)

<p class="figure-caption"><b>Figure 6:</b> Preparation of molecular dynamics simulation.</p> 

##### Test
We then performed MD and quantitatively studied the binding situation of the two proteins through RMSD, hydrogen bond count, and Free Energy analysis.  

![Figure 7](https://static.igem.wiki/teams/5870/engineering/drylab/binding-free-energy.webp)

<p class="figure-caption"><b>Figure 7:</b> Binding free energy analysis.</p> 

##### Learn
Finally, by tracking atomic motion trajectories, we dynamically resolved structural stability, local flexibility, and thermodynamic properties. This analysis provides a theoretical basis for the adhesion system.

---

### Big Cycle 3: Modeling and Analysis of GPCR Signaling Pathway

This Big Cycle aims to investigate the activation mechanism of GPCRs after ligand binding, helping to identify variants that are both sensitive and functionally active.

---

#### D-B-T-L: Molecular Docking for GPCR-Ligand Screening

##### Design
We intended to select better combinations of G proteins and GPCRs through simulation to narrow down the scope.

##### Build
We used molecular docking to estimate the binding energy between ligands and GPCR–G protein complexes.

##### Test
After docking, we found that the differences in binding energies were not significant. Moreover, simple docking cannot reveal whether GPCRs are activated post-binding.  

![Figure 8](https://static.igem.wiki/teams/5870/engineering/drylab/molecular-docking.webp)

<p class="figure-caption"><b>Figure 8:</b> Result of molecular docking.</p> 

##### Learn
We realized the need for a method that can comprehensively study GPCR behavior after ligand binding.

---

#### D-B-T-L: Dynamic GPCR Analysis via MD

##### Design
We adopted molecular dynamics simulations to study dynamic changes of GPCRs after ligand binding, attempting to determine activation status.

##### Build
We prepared GPCR–ligand complexes and performed MD simulations.

##### Test
We analyzed RMSD, RMSF, and conducted PCA to explore conformational changes. However, PCA alone could not confirm activation.  

![Figure 9](https://static.igem.wiki/teams/5870/engineering/drylab/primary-md-result.webp)

<p class="figure-caption"><b>Figure 9:</b> Primary result of molecular dynamics simulation. </p> 

##### Learn
We realized that a solid structural criterion is needed to determine whether GPCRs are truly activated.

---

#### D-B-T-L: Activation Criterion Validation

##### Design
Through literature review, we found that GPCR activation in yeast involves a 12 Å reduction in the distance between the second and sixth transmembrane α-helices.

##### Build
We applied this structural criterion to analyze trajectory files from our MD simulations.

##### Test
We measured the distance changes between the α-helices of several GPCR variants to identify those meeting the activation condition.  
![Figure 10](https://static.igem.wiki/teams/5870/engineering/drylab/further-md-result.webp)

<p class="figure-caption"><b>Figure 10:</b> Improved MD results showing GPCR activation analysis.</p> 

##### Learn
We successfully screened several GPCR variants with high activation potential, deepening our understanding of how dry-lab modeling complements wet-lab validation.

---

### Big Cycle 4: Improved SEIR Model for *Helicobacter pylori* Infection

This Big Cycle models *H. pylori* infection dynamics and the impact of drug intervention using an extended SEIR model.

---

#### D-B-T-L: Basic SEIR with Drug Addition

##### Design
Initially, we wanted to incorporate the effect of medication into the SEIR model.

##### Build
We added a medicated population to the SEIR equations.

##### Test
We compared infection dynamics with and without drug intervention.

![Figure 11](https://static.igem.wiki/teams/5870/engineering/drylab/without-drug.webp)

<p class="figure-caption"><b>Figure 11:</b> SEIR model without drug.</p>

![Figure 12](https://static.igem.wiki/teams/5870/engineering/drylab/seir-sd-drug-resistance.webp)

<p class="figure-caption"><b>Figure 12:</b> SEIR model with drug.</p>


##### Learn
We found that this model starts from a special initial state and cannot intuitively reflect changes after drug introduction.

---

#### D-B-T-L: Improved SEIR Model with Delayed Drug Introduction

##### Design
We wanted to show how introducing the drug later could improve infection outcomes.

##### Build
We modified the model to introduce the drug only after the system reaches a steady state.

##### Test
After adjusting drug introduction timing, the results clearly demonstrated the effect of drug treatment.  

![Figure 13](https://static.igem.wiki/teams/5870/engineering/drylab/with-drug.webp)

<p class="figure-caption"><b>Figure 13:</b> Improved SEIR model with delayed drug introduction.</p>


##### Learn
We successfully demonstrated the efficacy of our drug through dynamic SEIR modeling.
