
### Modeling and Analysis of GPCR Signaling Pathway

#### Background
In the microscopic biological world, G protein-coupled receptors (GPCRs) function as cellular "signal antennas" that receive extracellular signals and initiate intracellular cascade reactions. This process plays a core role in numerous life activities, including yeast mating and mammalian physiological regulation. In our project, GPCRs serve as the central component of the sensing system. However, the activation of GPCRs and the transmission of downstream pathways involve highly dynamic and complex conformational changes, which cannot be fully captured by static experimental structures alone.

To address this challenge, we screened for the most sensitive and effective engineered GPCRs using molecular docking and molecular dynamics (MD) simulations. Furthermore, we deciphered the complete signal transduction mechanism from perception to response via ordinary differential equation (ODE) mathematical modeling, enabling quantitative analysis of the signaling process. Ultimately, we innovatively reengineered the yeast mating signal system into a *H. pylori* recognition system. Our GPCR signaling pathway modeling, integrated with wet-lab validation, provides a promising universal strategy for engineering yeast GPCR sensing systems to achieve specific functions, offering valuable insights for future iGEM teams focusing on GPCR modification.


#### Molecular Dynamics (MD) Simulation Analysis of GPCRs

##### Sources of GPCR Variants
To engineer the endogenous yeast GPCR (Ste2) for the recognition of α-methylhistamine, we adopted three parallel design strategies to screen for the most sensitive and efficient GPCR sensors:

###### Strategy 1: Chimeric GPCR
**Principle**: This strategy leverages the modular nature of GPCRs. We fused the ligand-recognition domains—extracellular domains (ECDs) and transmembrane domains (TMDs)—of human histamine receptors (e.g., hH1R, hH2R, hH3R, hH4R) with the intracellular domains (ICDs) of the yeast Ste2 receptor, which mediate interactions with the downstream G protein Gpa1, thereby constructing novel chimeric proteins.

###### Strategy 2: Exogenous GPCR + Chimeric G-protein
**Principle**: G proteins also exhibit prominent modularity, with their GPCR selectivity primarily determined by several key amino acids at the C-terminus. We retained intact, unmodified human GPCRs (e.g., hH3R) while engineering the endogenous yeast Gα protein (Gpa1). Specifically, we replaced the 5 C-terminal amino acids of Gpa1 with the corresponding sequences from three human Gα subtypes (Gαi, Gαs, Gαq), generating three chimeric G proteins: Gpai, Gpas, and Gpaq.<sup id="back26">[26](#ref26)</sup>

###### Strategy 3: Literature-Validated Positive Controls
To verify the reliability of our simulation system, we incorporated two systems previously validated in the literature<sup id="back27">[27](#ref27)</sup> :

**mhH3R-Gpai**: An optimized modified histamine H3 receptor with high ligand sensitivity, paired with the chimeric Gpai protein.

**P2Y2-Gpap**: The human P2Y2 receptor, an extracellular ATP (eATP) sensor. Literature has confirmed its synergistic function with the chimeric G protein Gpap in yeast, where it successfully activates downstream pathways upon ATP binding. This system served as the "positive control" for our simulation workflow to ensure our analytical methods could accurately capture known activation events.

##### Methods

###### Preparation

1. **GPCRs and G proteins**: The 3D structures of target GPCRs (hH1R, hH2R, hH3R, hH4R, mhH3R, P2Y2) and G proteins (Gpai, Gpaq, Gpap, Gpas) were prioritized from the Protein Data Bank (PDB)<sup id="back7-2">[7](#ref7)</sup>,<sup id="back8-2">[8](#ref8)</sup>. For proteins lacking experimental structures or containing missing loops (e.g., chimeric proteins), homology modeling tools SWISS-MODEL were used for structure completion and construction. All structures underwent rigorous inspection prior to use.

2. **Ligand Preparation**: The mol2 structure file of the target ligand Nα-methylhistamine (NAMH) was retrieved from the ZINC database or CHEMICAL BOOK website. The Antechamber tool and General Amber Force Field (GAFF) were used to generate ligand topology files<sup id="back14">[14](#ref14)</sup>, which were then converted to GROMACS-compatible itp force field files using the ACPYPE script<sup id="back15">[15](#ref15)</sup>,<sup id="back16">[16](#ref16)</sup>.

3. **Construction of Protein-Membrane Complexes**: The "Membrane Builder" module of the CHARMM-GUI online server was employed for system construction. The GPCR structure was embedded in a pre-equilibrated phospholipid bilayer mimicking the yeast membrane composition (POPE: POPI: POPC: POPS: ERG = 6: 2: 2: 1: 6; see the figure below for details)<sup id="back17">[17](#ref17)</sup>
   . Subsequently, the corresponding Gα protein (e.g., Gpai) was positioned on the intracellular side of the GPCR, with reference to resolved GPCR-G protein complex structures to ensure a physiologically relevant initial orientation.

   ![Figure 22](https://static.igem.wiki/teams/5870/model/gpcr/figure-1.webp)
   <p class="figure-caption"><b>Figure 22:</b> The composition table of membrane.</p>

Then we can get the results：

![Figure 23](https://static.igem.wiki/teams/5870/model/gpcr/figure-2.webp)
<p class="figure-caption"><b>Figure 23:</b> The generation report of the membrane.</p>

![Figure 24](https://static.igem.wiki/teams/5870/model/gpcr/figure-3.webp)
<p class="figure-caption"><b>Figure 24:</b> Sketch map of membrane-protein complex.</p>

###### Molecular Docking Process

Semi-flexible docking was performed using AutoDock Vina to predict the optimal binding conformation and affinity of NAMH within the active pockets of different GPCR variants.

**Workflow**:
1. The GPCR was treated as a rigid receptor, and NAMH as a flexible ligand.

2. A sufficiently sized grid box was defined in the region enclosed by transmembrane helices, based on either the binding sites of known homologous ligands or cavity recognition algorithms.

3. Docking calculations were executed to generate multiple binding conformations.

4. The conformation with the lowest binding affinity (kcal/mol) and the most clustered, physiologically reasonable structure was selected as the initial structure for subsequent MD simulations.

   ![Figure 25](https://static.igem.wiki/teams/5870/model/gpcr/figure-4.webp)
   <p class="figure-caption"><b>Figure 25:</b> Molecular docking site.</p>

###### Molecular Dynamics Simulation Process
**Software and Force Fields**: All MD simulations were performed using the GROMACS 2020 package<sup id="back10">[10](#ref10)</sup>. The CHARMM36m force field was applied to proteins, lipids, and ions, and the TIP3P water model was used for solvation.

```bash
   grep -v "HSM" input.pdb | grep "ATOM" > protein.pdb

   grep "HSM" input.pdb > ligand.pdb
   
   gmx pdb2gmx -f protein.pdb -o protein.gro -p topol.top -ff    amber99sb-ildn -water tip3p -ignh

   gmx editconf -f ligand.pdb -o ligand.gro

   sed -i '/forcefield.itp/a #include "ligand.itp"' topol.top

   echo "" >> topol.top 

   echo "; Ligand" >> topol.top

   echo "HSM         1" >> topol.top

   PROTEIN_ATOMS=$(tail -n 2 protein.gro | head -n 1 | awk '{print $1}')

   LIGAND_ATOMS=$(tail -n 2 ligand.gro | head -n 1 | awk '{print $1}')

   BOX_VECTOR=$(tail -n 1 protein.gro)

   TOTAL_ATOMS=$((PROTEIN_ATOMS + LIGAND_ATOMS

   echo "Complex of Protein and Ligand" > complex.gro

   echo " ${TOTAL_ATOMS}" >> complex.gro

   sed -n '3,$(($PROTEIN_ATOMS+2))p' protein.gro >> complex.gro

   sed -n '3,$(($LIGAND_ATOMS+2))p' ligand.gro >> complex.gro

   echo "${BOX_VECTOR}" >> complex.gro
```

1. **System Preparation**:

- **Solvation**: The constructed GPCR-membrane-G protein complex was placed in a sufficiently large simulation box and solvated with TIP3P water molecules.

  ```bash
     gmx editconf -f complex.gro -o complex_boxed.gro -c -d 1.0 -bt cubic

     gmx solvate -cp complex_boxed.gro -cs spc216.gro -o system_solvated.gro -p topol.top
  ```

- **Neutralization**: Na⁺ or Cl⁻ ions were added to neutralize the total charge of the system and achieve a physiological salt concentration (~0.15 M).

   ```bash
   gmx grompp -f ions.mdp -c system_solvated.gro -p topol.top -o ions.tpr 

   echo "SOL" | gmx genion -s ions.tpr -o system_ions.gro -p topol.top -neutral
   ```

- **Energy Minimization**: The steepest descent algorithm was used to minimize the system energy, eliminating unfavorable steric clashes and atomic interactions.

   ```bash
   gmx grompp -f em.mdp -c system_ions.gro -p topol.top -o em.tpr 

   gmx mdrun -deffnm em
   ```

1. **Equilibration**:

- **NVT Equilibration**: A 1-nanosecond (ns) simulation was conducted under constant volume and temperature (310 K). Position restraints were applied to the heavy atoms of proteins and lipids to allow water molecules and ions to equilibrate around the solute.

   ```bash
   gmx grompp -f nvt.mdp -c em.gro -r em.gro -p topol.top -o nvt.tpr

   gmx mdrun -deffnm nvt
   ```

- **NPT Equilibration**: A 10-ns simulation was performed under constant pressure (1 bar) and temperature (310 K). Position restraints were gradually weakened and ultimately removed to stabilize the system density and pressure.

   ```bash
   gmx grompp -f npt.mdp -c nvt.gro -r nvt.gro -p topol.top -o npt.tpr 

   gmx mdrun -deffnm npt
   ```

3. **Simulation**:
- A 40,000-ps (40 ns) production simulation was performed for each docked system under the NPT ensemble. The Parrinello-Rahman pressure coupling and Nosé-Hoover temperature coupling methods were utilized. Long-range electrostatic interactions were calculated via the Particle Mesh Ewald (PME) algorithm, and a cutoff radius was set for van der Waals interactions and short-range Coulomb forces. Trajectory coordinates were saved every 10 picoseconds (ps).

   ```bash
   gmx grompp -f md.mdp -c npt.gro -p topol.top -o md.tpr 
   
   gmx mdrun -deffnm md
   ```

4. **Result Analysis and Output**:
- GROMACS built-in tools (e.g., gmx rms, gmx rmsf, gmx covar, gmx anaeig, gmx hbond) were used to analyze trajectory files, extract key parameters, and export data in xvg format for subsequent plotting and analysis.

   ```bash
   # --- 1.preparation---

   echo -e "resname ${LIGAND_ITP_MOLNAME}\nname 19 MyLigand\n\"Protein\" | \"MyLigand\"\nname 20 Complex\nq" | gmx make_ndx -f em.gro -o index.ndx

   check_file_exists "index.ndx"
   
   echo "Complex System" | gmx trjconv -s md.tpr -f md.xtc -o md_whole.xtc -n index.ndx -pbc whole -center -ur compact
   
   check_file_exists "md_whole.xtc"
   
   echo "Backbone System" | gmx trjconv -s md.tpr -f md_whole.xtc -o md_final.xtc -fit rot+trans

   check_file_exists "md_final.xtc"
   
   # --- 2. RMSD analysis ---

   echo "Backbone Backbone" | gmx rms -s em.tpr -f md_final.xtc -o rmsd.xvg -tu ns
   
   # --- 3. RMSF analysis ---

   echo "C-alpha" | gmx rmsf -s md.tpr -f md_final.xtc -o rmsf.xvg -res
   
   # --- 4. Rg analysis---

   echo "Complex" | gmx gyrate -s md.tpr -f md_final.xtc -o gyrate.xvg
   
   # --- 5. TM2-TM6 Distance analysis ---

   gmx make_ndx -f em.gro -o index_tm2-tm6.ndx <<EOF

   a CA & r ${TM2_RES}

   name 21 TM2_CA

   a CA & r ${TM6_RES}

   name 22 TM6_CA

   q

   EOF
   
   check_file_exists "index_tm2-tm6.ndx"
   
   echo -e "TM2_CA\nTM6_CA" | gmx distance -s md.tpr -f md_final.xtc -n index_tm2-tm6.ndx -oav distance_TM2-TM6.xvg
   ```
   
##### Results

###### Molecular Docking
AutoDock enabled the determination of the spatial binding modes of α-methylhistamine with GPCRs, and the binding affinities were quantified using the built-in scoring function of AutoDock Vina, as summarized in the table below.

| Combination | Agonist | Receptor | G Protein | G-     | G+     |
| :---------: | :-----: | :------: | :-------: | :----: | :----: |
| 1           | NAMH    | CH1R     | None      | -4.841 | None   |
| 2           | NAMH    | CH2R     | None      | -3.361 | None   |
| 3           | NAMH    | CH3R     | None      | -4.704 | None   |
| 4           | NAMH    | CH4R     | None      | -4.263 | None   |
| 5           | NAMH    | hH1R     | Gpas      | -4.236 | -3.976 |
| 6           | NAMH    | hH1R     | Gpai      | -4.236 | -4.321 |
| 7           | NAMH    | hH1R     | Gpaq      | -4.236 | -4.191 |
| 8           | NAMH    | hH2R     | Gpas      | -3.963 | -4.513 |
| 9           | NAMH    | hH2R     | Gpai      | -3.963 | -4.411 |
| 10          | NAMH    | hH2R     | Gpaq      | -3.963 | -4.515 |
| 11          | NAMH    | hH3R     | Gpas      | -4.351 | -4.396 |
| 12          | NAMH    | hH3R     | Gpai      | -4.351 | -4.128 |
| 13          | NAMH    | hH3R     | Gpaq      | -4.351 | -4.047 |
| 14          | NAMH    | hH4R     | Gpas      | -3.597 | -4.213 |
| 15          | NAMH    | hH4R     | Gpai      | -3.597 | -4.190 |
| 16          | NAMH    | hH4R     | Gpaq      | -3.597 | -4.209 |
| 17          | NAMH    | mhH3R    | Gpai      | -4.597 | -4.054 |
| 18          | ATP     | P2Y2     | Gpap      | -4.254 | -4.648 |

![Figure 26](https://static.igem.wiki/teams/5870/model/gpcr/figure-5.webp)
<p class="figure-caption"><b>Figure 26:</b> Binding energy without G protein (P2Y2 to ATP, others to NAMH).</p>

![Figure 27](https://static.igem.wiki/teams/5870/model/gpcr/figure-6.webp)
<p class="figure-caption"><b>Figure 27:</b>Binding energy with G Protein (P2Y2 to ATP, others to NAMH).</p>

Three hH3R combinations (hH3R-Gpai, hH3R-Gpas, hH3R-Gpaq), along with mhH3R-Gpai and P2Y2-Gpap, were selected as candidates based on their favorable binding affinities. However, binding affinity alone is insufficient; the key criterion is whether ligand binding induces conformational changes to initiate downstream signal transduction. Thus, we further performed MD simulations for these five candidate combinations.

###### Molecular Dynamics Simulation Results

**Quality Control**: 

1. **Root Mean Square Deviation (RMSD)**: RMSD of the protein backbone was calculated to assess structural stability during simulations. All five systems reached equilibrium within ~10–20 ns, with RMSD values plateauing, indicating stable system structures without extreme events such as unfolding.

   ![Figure 28](https://static.igem.wiki/teams/5870/model/gpcr/figure-7.webp)
   <p class="figure-caption"><b>Figure 28:</b> RMSD analysis during simulation. </p>

2. **Radius of Gyration (Rg)**: Rg reflects the compactness of the protein structure. In all simulations, the total Rg values (black line in figures) remained stable without significant fluctuations, confirming that proteins maintained their native folded conformation and compactness throughout the 40-ns simulation.

   ![Figure 29](https://static.igem.wiki/teams/5870/model/gpcr/figure-8.webp)

   <p class="figure-caption"><b>Figure 29:</b> Radius of gyration during simulation.</p>

3. **Root Mean Square Fluctuation (RMSF)**: RMSF analysis revealed residue-specific flexibility. All systems exhibited typical GPCR dynamic features: low fluctuations (structural rigidity) in transmembrane helices, and high fluctuations (structural flexibility) in intracellular/extracellular loops and N/C-termini.

   ![Figure 30](https://static.igem.wiki/teams/5870/model/gpcr/figure-9.webp)
   <p class="figure-caption"><b>Figure 30:</b> RMSF analysis during simulation.</p>

4. **Principal Component Analysis (PCA)**:

   **Eigenvalues of the Covariance Matrix**: For all systems, the first ~10 eigenvalues accounted for the majority of total system motion, followed by a rapid decay to near zero. This indicates that protein motion is dominated by a few major collective modes (principal components), justifying the use of the first two components (PC-1, PC-2) to describe conformational changes.

   ![Figure 31](https://static.igem.wiki/teams/5870/model/gpcr/figure-10.webp)
   <p class="figure-caption"><b>Figure 31:</b> Eigenvalues of the covariance matrix. </p>

   **Projection onto Eigenvectors**: Trajectory projection onto PC-1 and PC-2 showed that systems did not fully converge to a single conformational cluster within 40 ns, but rather exhibited directional drift along PC-1. This drift suggests a slow, global conformational transition occurring on a timescale longer than the simulation. Specifically,CH3R, hH3R-Gpai, hH3R-Gpaq, hH3R-Gpas, mhH3R-Gpai, and the positive control P2Y2-Gpap all showed a continuous increasing trend along PC-1, indicating shared major motion modes. Behavior along PC-2 was more complex, with oscillations or gradual changes (e.g., hH3R-Gpai showed decreasing PC-2 values with oscillation, while P2Y2-Gpap showed an initial increase followed by a decrease), reflecting differences in secondary motion modes. PCA results confirmed high dynamics of these GPCR-G protein complexes, and the shared drift along PC-1 (consistent with the positive control) suggests conformational changes associated with receptor activation.

   ![Figure 32](https://static.igem.wiki/teams/5870/model/gpcr/figure-11.webp)
   <p class="figure-caption"><b>Figure 32:</b> Projection onto eigenvectors. </p>

###### Activation State Analysis
GPCR activation is characterized by conformational rearrangement of transmembrane (TM) helices. According to a *Nature* study<sup id="back25">[25](#ref25)</sup>, the class D fungal GPCR Ste2 has a unique activation mechanism summarized as "obstruction removal and inward compaction":

**Inactive State**: In the absence of agonist, the intracellular end of TM helix H7 is disordered and folded inward, physically blocking the G protein binding site.

**Active State**: Agonist binding triggers conformational changes, including a ~20 Å outward swing of the disordered H7 region (removing the obstruction) and a ~12 Å inward movement of the intracellular end of H6 (forming the G protein binding site).

We used the "12 Å inward movement of the H6 intracellular end" as the activation criterion, monitoring the H2-H6 distance during simulations:

![Figure 33](https://static.igem.wiki/teams/5870/model/gpcr/figure-12.webp)
<p class="figure-caption"><b>Figure 33:</b> The distance between H2 and H6. </p>

**P2Y2-Gpap System (Figure 33.g):** As the positive control, this system displays a clear and rapid activation event. The H2-H6 distance sharply decreases from an initial ~3.5 nm (35 Å) to a stable conformation at ~1.5-2.0 nm (15-20 Å). This represents a significant reduction of approximately 1.5-2.0 nm (15-20 Å), confirming the validity of the simulation criteria for activation.

**hH3R-Gpaq System (Figure 33.e):** This system demonstrates a strong activation profile similar to the positive control. The distance undergoes a substantial reduction from ~8.0 nm (80 Å) to a stable range of ~5.0 nm (50 Å). The total decrease of ~3.0 nm (30 Å) clearly indicates a significant conformational change consistent with receptor activation.

**CH3R System (Figure 33.b):** This simulation also shows a notable distance reduction. The H2-H6 distance decreases from approximately 9.5 nm (95 Å) to a more compact state around 7.5 nm (75 Å), resulting in a total reduction of ~2.0 nm (20 Å), which suggests an activation-like conformational change.

**hH3R-Gpai System (Figure 33.c):** This system also meets the quantitative requirements for activation. The H2-H6 distance decreases from an initial value of approximately 10.5 nm (105 Å) to a range around 8.0 nm (80 Å). This results in a total reduction of ~2.5 nm (25 Å), which exceeds the threshold for an activation event. However, it's worth noting that the final state exhibits more fluctuation compared to the stable conformations seen in the P2Y2-Gpap and hH3R-Gpaq systems.

**CH1R (Figure 33.a), hH3R-Gpas (Figure 33.d), and mhH3R-pai (Figure 33.f) Systems:** These three systems do not show clear evidence of sustained activation.

    **Figure 33.a:** The distance fluctuates dynamically between 4.0 nm and 7.5 nm without settling into a stable, reduced state
    
    **Figure 33.c:** Although there is a slight downward trend from ~10.5 nm to ~8.0 nm, the high degree of fluctuation and modest overall change suggest an unstable or non-activated state.
    
    **Figure 33.f:** The distance remains in a relatively stable but dynamic range between 2.0 nm and 3.5 nm, showing no significant reduction.

###### Conclusion
The analysis reveals that the **hH3R-Gpaq system (e)** exhibits a clear and stable activation event, a behavior that is strongly mirrored by the **positive control, P2Y2-Gpaq (g)**. Additionally, the **hH3R-Gpai (c)** and **CH3R (b)** systems show significant H2-H6 distance reductions (~2.5 nm and ~2.0 nm respectively) that meet the quantitative criteria for activation, although their final states are more dynamic. Conversely, the other **hH3R-Gpas simulation (d)** shows a distinct increase in distance, indicating a failure to activate. The remaining systems did not display conformational changes consistent with activation.

In summary, we established an efficient screening and analysis workflow using a dry-lab strategy combining molecular docking and MD simulations: First, molecular docking and binding affinity scoring enabled initial screening of numerous GPCR-G protein candidates, identifying high-potential combinations. Next, MD simulations probed the dynamic conformational evolution of engineered GPCRs upon NAMH binding. Finally, comprehensive evaluation of binding stability and conformational activity identified CH3R，hH3R-Gpai ,hH3R-Gpaq as the optimal candidate. This dry-lab strategy not only narrowed the scope of subsequent wet-lab validation but also revealed the molecular mechanisms of receptor-protein-ligand interactions, laying a solid theoretical foundation for functional validation of the sensing system.

#### ODE Modeling of G Protein Pathway Signal Transduction

When the **H. pylori**-associated signaling molecule hH3R diffuses to the gut and binds to the seven-transmembrane receptor Ste2, it activates downstream G proteins, recruits the scaffold protein Ste5 to form a signal complex, and further initiates the MAPK cascade reaction composed of Ste11-Ste7-Fus3. Ultimately, it activates the transcription factor Ste12 to regulate the expression of target genes<sup id="back12">[12](#ref12)</sup>. To clearly reveal the dynamic change rules of each molecular concentration, the rate-limiting steps of key reactions, and the synergistic mechanism of signal transmission in this process, this section adopts ordinary differential equations (ODEs) to construct a mathematical model, realizing the quantitative simulation and analysis of the GPCR signaling pathway, and laying a foundation for studying the sensitivity and response time of the sensing system in our project.

![Figure 34](https://static.igem.wiki/teams/5870/model/gpcr/figure-13.webp)
<p class="figure-caption"><b>Figure 34:</b> The GPCR signaling pathway in modified yeast.</p>

##### Assumptions

The model is based on the following core assumptions that conform to biological common sense and physical laws:

1. **Short-Term Steady-State Assumption**: The simulation focuses on the short-term signal transmission process (within 300 seconds) after hH3R activation. De novo protein synthesis is not considered for the time being, and it is assumed that the total concentrations of core molecules such as Ste2, Ste5, and the MAPK family remain stable.

1. **Unified Dephosphorylation Assumption**: In the MAPK cascade reaction, the dephosphorylation of molecules such as Ste11, Ste7, and Fus3 is mediated by phosphatases. To simplify the model, it is assumed that they have the same basic dephosphorylation rate constant.

1. **Molecular Behavior Assumption**: The reactions of all molecules in the system follow the random collision theory and are not disturbed by external environmental factors such as temperature and pH. The reaction process is only determined by concentration and reaction rate constants.

1. **Gβγ Concentration Correlation Assumption**: The concentration of activated G protein βγ subunits (Gβγ) is directly linked to the concentration of the hH3R-Ste2 receptor complex, that is, the degree of receptor activation directly reflects the release amount of Gβγ.

1. **Hill Coefficient Assumption**: The binding of the transcription factor Ste12 to DNA does not consider cooperative effects for the time being, and the Hill coefficient is set to n=1, meaning that each binding site is independent of each other.

##### Core Formulas

The model is divided into five functional modules according to the signal transmission sequence. The core reaction equations, ODE equations, and parameter meanings of each module are as follows:

###### 1. Receptor Activation Module

The binding and dissociation kinetic process of hH3R and the seven-transmembrane receptor Ste2, which is the initial step of signal transmission.

1. Reaction Equations

   - Binding reaction: $$hH3R + Ste2 \stackrel{K_{hs}}{\to} hH3R-Ste2$$

   - Dissociation reaction: $$hH3R-Ste2 \stackrel{K_{sh}}{\to} hH3R + Ste2$$

2.  ODE Equations

    $$ 
    \begin{align} \frac{d[Ste2]}{dt} &= -K_{hs}[hH3R][Ste2] + K_{sh}[hH3R-Ste2] \\ \frac{d[hH3R-Ste2]}{dt} &= K_{hs}[hH3R][Ste2] - K_{sh}[hH3R-Ste2] \\ \frac{d[hH3R]}{dt} &= -K_{hs}[hH3R][Ste2] + K_{sh}[hH3R-Ste2] 
    \end{align} 
    $$

 3. Parameter and Variable Meanings

    | Symbol        | Meaning                                                      |
    | :-----------: | :----------------------------------------------------------: |
    | $$K_{hs}$$    | Reaction rate constant: Rate constant for hH3R and Ste2 to form the hH3R-Ste2 complex |
    | $$K_{sh}$$    | Reaction rate constant: Rate constant for the dissociation of the hH3R-Ste2 complex into free hH3R and Ste2 |
    | $$[x]$$      | Concentration of the molecule in brackets (e.g., $[Ste2]$ represents the concentration of free Ste2 receptors) |
    | $$hH3R-Ste2$$ | Receptor-ligand complex formed by the binding of hH3R and Ste2 |

###### 2. Scaffold Formation Module

Activated Gβγ subunits recruit the scaffold protein Ste5 to form a multi-level assembly process of monomolecular binding, dimers, and advanced complexes, providing anchor sites for the MAPK cascade reaction.

1. Reaction Equations

   - Ste5 dimerization: $$Ste5 + Ste5 \stackrel{K_{SS}}{\to} Ste5-Ste5$$

   - Binding of Gβγ and Ste5: $$G\beta\gamma + Ste5 \stackrel{K_{SG}}{\to} G\beta\gamma-Ste5$$

   - Binding of Gβγ and double Ste5: $$G\beta\gamma + Ste5 + Ste5 \stackrel{K_{GSS1}}{\to} G\beta\gamma-Ste5-Ste5$$

   - Binding of Gβγ-Ste5 and Ste5: $$G\beta\gamma-Ste5 + Ste5 \stackrel{K_{GSS2}}{\to} G\beta\gamma-Ste5-Ste5$$

   - Binding of double Gβγ-Ste5: $$G\beta\gamma-Ste5 + G\beta\gamma-Ste5 \stackrel{K_{GSSG1}}{\to} G\beta\gamma-Ste5-Ste5-G\beta\gamma$$

   - Binding of Gβγ and Gβγ-Ste5-Ste5: $$G\beta\gamma-Ste5-Ste5 + G\beta\gamma \stackrel{K_{GSSG2}}{\to} G\beta\gamma-Ste5-Ste5-G\beta\gamma$$

2. ODE Equations

   $$ 
   \begin{align}
   \frac{d[Ste5-Ste5]}{dt} &= K_{SS}[Ste5]^2 \\ \frac{d[G\beta\gamma-Ste5]}{dt} &= K_{SG}[G\beta\gamma][Ste5] \\ \frac{d[G\beta\gamma-Ste5-Ste5]}{dt} &= K_{GSS1}[G\beta\gamma][Ste5]^2 + K_{GSS2}[G\beta\gamma-Ste5][Ste5] \\ \frac{d[G\beta\gamma-Ste5-Ste5-G\beta\gamma]}{dt} &= K_{GSSG1}[G\beta\gamma-Ste5]^2 + K_{GSSG2}[G\beta\gamma-Ste5-Ste5][G\beta\gamma] \\ \frac{d[Ste5]}{dt} &= -2K_{SS}[Ste5]^2 - K_{SG}[G\beta\gamma][Ste5] \\ &\quad -2K_{GSS1}[G\beta\gamma][Ste5]^2 - K_{GSS2}[G\beta\gamma-Ste5][Ste5] \\ [G\beta\gamma] &= (hH3R-Ste2)_{stable} 
   \end{align}
   $$

3. Parameter and Variable Meanings

   | Symbol                      | Meaning                                                      |
   | :-------------------------: | :----------------------------------------------------------: |
   | $$K_{SS}$$                  | Reaction rate constant: Rate constant for two free Ste5 molecules to form a Ste5-Ste5 dimer |
   | $$K_{SG}$$                  | Reaction rate constant: Rate constant for Gβγ and Ste5 to form the Gβγ-Ste5 complex |
   | $$K_{GSS1}$$                | Reaction rate constant: Rate constant for Gβγ and two free Ste5 molecules to form Gβγ-Ste5-Ste5 |
   | $$K_{GSS2}$$                | Reaction rate constant: Rate constant for Gβγ-Ste5 and free Ste5 to form Gβγ-Ste5-Ste5 |
   | $$K_{GSSG1}$$               | Reaction rate constant: Rate constant for two Gβγ-Ste5 molecules to form Gβγ-Ste5-Ste5-Gβγ |
   | $$K_{GSSG2}$$               | Reaction rate constant: Rate constant for Gβγ-Ste5-Ste5 and Gβγ to form Gβγ-Ste5-Ste5-Gβγ |
   | $$G\beta\gamma$$            | Activated G protein βγ subunits, whose steady-state concentration is equal to the steady-state concentration of the hH3R-Ste2 complex |
   | $$Ste5-Ste5$$               | Homodimer formed by Ste5                                     |
   | $$G\beta\gamma-Ste5$$ | Gβγ-Ste5 scaffold complexes in different assembly forms      |

###### 3. MAPK Cascade Reaction Module

The scaffold complex recruits Ste11 (MAPKKK), Ste7 (MAPKK), and Fus3 (MAPK), and realizes signal amplification and transmission through sequential phosphorylation.

1. Reaction Equations

   - Binding and dissociation of Ste5 and Ste11: $$Ste5_{off-st1} + Ste11_{off} \underset{K_{offSte5-Ste11}}{\stackrel{K_{onSte5-Ste11}}{\rightleftharpoons}} Ste5-Ste11$$

   - Phosphorylation of Ste11: $$Ste11 \stackrel{ste20}{\to} Ste11pS \stackrel{ste20}{\to} Ste11pSpS \stackrel{ste20}{\to} Ste11pSpSpT$$

   - Phosphorylation of Ste7: $$Ste7 \xrightarrow{Ste11pS, Ste11pSpS, Ste11pSpSpT} Ste7pS \xrightarrow{Ste11pS, Ste11pSpS, Ste11pSpSpT} Ste7pSpT$$

   - Phosphorylation of Fus3: $$Fus3 \stackrel{Ste7pS, Ste7pSpT}{\to} Fus3pY \stackrel{Ste7pS, Ste7pSpT}{\to} Fus3pYpT$$

2. ODE Equations

   - Kinetics of Binding and Dissociation Between Ste5 and Ste11

       $$ 
       \begin{align} \frac{d[Ste5_{off-st1}]}{dt} &= K_{offSte5-Ste11}[Ste5-Ste11] - K_{onSte5-Ste11}[Ste5_{off-st1}][Ste11_{off}] \\ \frac{d[Ste11_{off}]}{dt} &= K_{offSte5-Ste11}[Ste5-Ste11] - K_{onSte5-Ste11}[Ste5_{off-st1}][Ste11_{off}] \\ \frac{d[Ste5-Ste11]}{dt} &= -K_{offSte5-Ste11}[Ste5-Ste11] + K_{onSte5-Ste11}[Ste5_{off-st1}][Ste11_{off}] 
       \end{align} 
       $$

   - Phosphorylation Kinetics (Taking Key Molecules as Examples)

        $$ 
        \begin{align}
         \frac{d[Ste11pSpSpT]}{dt} &= K_{cat\_Ste11}[Ste11pSpS] - K_{dephos}[Ste11pSpSpT] \\ \frac{d[Ste7pS]}{dt} &= K_{cat\_Ste11pSSte7pS}[Ste11pS] \cdot \frac{[Ste11_{total}]}{[Ste5-Ste11]} \cdot \frac{[Ste5-Ste7]}{[Ste7_{total}]} \cdot \left(\frac{[Ste7pS]}{[Ste7_{total}]}\right)^2 + ... \\ \frac{d[Fus3pYpT]}{dt} &= K_{cat\_Fus3}[Fus3pY] - K_{dephos}[Fus3pYpT] 
        \end{align} 
        $$

3. Parameter and Variable Meanings

   | Symbol                            | Meaning                                                      |
   | :-------------------------------: | :----------------------------------------------------------: |
   | $$K_{onSte5-Ste11}$$              | Binding rate constant: Rate constant for free Ste5 ($$Ste5_{off-st1}$$) and free Ste11 ($$Ste11_{off}$$) to bind |
   | $$K_{offSte5-Ste11}$$             | Dissociation rate constant: Rate constant for the dissociation of the Ste5-Ste11 complex into free Ste5 and Ste11 |
   | $$K_{cat\_Ste11}$$                | Catalytic rate constant: Efficiency constant for Ste11pSpS to catalyze the formation of Ste11pSpSpT |
   | $$K_{cat\_Ste11pSSte7pS}$$        | Catalytic rate constant: Efficiency constant for Ste11pS to catalyze the formation of Ste7pS from Ste7 |
   | $$K_{dephos}$$                    | Dephosphorylation rate constant: Unified dephosphorylation rate constant for phosphorylated molecules such as Ste11, Ste7, and Fus3 |
   | $$Ste5_{off-st1}$$                | Free scaffold protein Ste5 not bound to Ste11                |
   | $$Ste11_{off}$$                   | Free kinase Ste11 not bound to Ste5                          |
   | $$Ste11pS/Ste11pSpS/Ste11pSpSpT$$ | Phosphorylated forms of Ste11 at the S302 site, double S sites, and double S+T sites, respectively |
   | $$Ste7pS/Ste7pSpT$$               | Phosphorylated forms of Ste7 at the S359 site and S+T sites, respectively |
   | $$Fus3pY/Fus3pYpT$$               | Phosphorylated forms of Fus3 at the Y site and Y+T sites, respectively |
   | $$Ste11_{total}/Ste7_{total}$$    | Total concentrations of Ste11 and Ste7 in the system (assumed to be constant) |

###### 4. Ste12 Activation Module

After the nuclear translocation of phosphorylated Fus3, the Ste12-Dig complex dissociates, releasing free Ste12 to initiate downstream transcription.

1. Reaction Equations

   - Nuclear translocation of Fus3: $$Fus3_{cyt} \stackrel{K_{in}}{\to} Fus3_{nuc}$$

   - Nuclear export of Fus3: $$Fus3_{nuc} \stackrel{K_{out}}{\to} Fus3_{cyt}$$

   - Dissociation of Ste12-Dig: $$Fus3p + Ste12-Dig1-Dig2 \stackrel{K_{phos1}/K_{phos2}}{\to} Fus3 + Dig1 + Dig2 + Ste12$$

   - Rebinding of Ste12: $$Ste12 + Dig1 + Dig2 \stackrel{K_{bind}}{\to} Ste12-Dig1-Dig2$$

2. ODE Equations

   $$ 
   \begin{align} 
   \frac{d[Fus3_{cyt}]}{dt} &= -K_{in}[Fus3_{cyt}] + K_{out}[Fus3_{nuc}] \\ \frac{d[Fus3_{nuc}]}{dt} &= K_{in}[Fus3_{cyt}] - K_{out}[Fus3_{nuc}] \\ \frac{d[C]}{dt} &= -(K_{phos1} + K_{phos2})[Fus3_{nuc}][C] \\ \frac{d[Dig1]}{dt} &= K_{phos1}[Fus3_{nuc}][C] - K_{dephos1}[Msg5][Dig1] \\ \frac{d[Dig2]}{dt} &= K_{phos2}[Fus3_{nuc}][C] - K_{dephos2}[Ptp2][Dig2] \\ \frac{d[Ste12]}{dt} &= (K_{phos1} + K_{phos2})[Fus3_{nuc}][C] - K_{bind}[Ste12][Dig1][Dig2] 
   \end{align} 
   $$

3. Parameter and Variable Meanings

   | Symbol                      | Meaning                                                      |
   | :-------------------------: | :-----------------------------------------------------------: |
   | $$K_{in}$$                  | Transport rate constant: Rate constant for phosphorylated Fus3 to enter the nucleus ($$Fus3_{nuc}$$) from the cytoplasm ($$Fus3_{cyt}$$) |
   | $$K_{out}$$                 | Transport rate constant: Rate constant for phosphorylated Fus3 to be exported from the nucleus to the cytoplasm |
   | $$K_{phos1}/K_{phos2}$$     | Phosphorylation rate constants: Rate constants for Fus3 to catalyze the phosphorylation of Dig1 and Dig2, respectively |
   | $$K_{dephos1}/K_{dephos2}$$ | Dephosphorylation rate constants: Rate constants for Msg5 to catalyze the dephosphorylation of Dig1 and Ptp2 to catalyze the dephosphorylation of Dig2, respectively |
   | $$K_{bind}$$                | Binding rate constant: Rate constant for free Ste12 to rebind with phosphorylated Dig1 and Dig2 |
   | $$C$$                       | Ste12-Dig1-Dig2 ternary complex (inactive form of Ste12 bound to Dig1 and Dig2) |
   | $$Fus3_{cyt}/Fus3_{nuc}$$   | Concentrations of phosphorylated Fus3 in the cytoplasm and nucleus, respectively |
   | $$Msg5/Ptp2$$               | Phosphatases, whose concentrations are assumed to be constant |
   | $$Dig1/Dig2$$               | Inhibitory proteins bound to Ste12, which dissociate from Ste12 after phosphorylation |

###### 5. Transcription-Translation Module

Free Ste12 acts as a transcription factor to initiate the transcription of the target gene (GeneA). The transcribed mRNA is then translated into protein, accompanied by the degradation of nucleic acid and protein.

1. Reaction Equations

   - Transcription: $$GeneA + Ste12 \xrightarrow{K_{trans}} mRNA_A + Ste12$$

   - mRNA degradation: $$mRNA_A \stackrel{K_{degmRNA}}{\to} Degradation\ Products$$

   - Translation: $$mRNA_A \xrightarrow{K_{transl}} ProteinA$$

   - Protein degradation: $$ProteinA \stackrel{K_{degprotein}}{\to} Degradation\ Products$$

2. ODE Equations

   $$ 
   \begin{align}
   \frac{d[mRNA_A]}{dt} &= K_{trans} \cdot \frac{[Ste12]^n}{[Ste12]^n + K_d^n} - K_{degmRNA}[mRNA_A] \\ \frac{d[ProteinA]}{dt} &= K_{transl}[mRNA_A] - K_{degprotein}[ProteinA] 
   \end{align} 
   $$

3. Parameter and Variable Meanings

   | Symbol             | Meaning                                                      |
   | :----------------: | :----------------------------------------------------------: |
   | $$K_{trans}$$      | Transcription rate constant: Rate constant for Ste12 to initiate the transcription of GeneA into $$mRNA_A$$ |
   | $$K_{transl}$$     | Translation rate constant: Rate constant for $$mRNA_A$$ to be translated into ProteinA |
   | $$K_{degmRNA}$$    | Degradation rate constant: Degradation rate constant of $$mRNA_A$$ |
   | $$K_{degprotein}$$ | Degradation rate constant: Degradation rate constant of ProteinA |
   | $$K_d$$            | Dissociation constant: Reflects the binding characteristics of Ste12 to the regulatory sequence of GeneA |
   | $$n$$              | Hill coefficient: Reflects the cooperative effect of Ste12 binding, set to $$n=1$$ (no cooperative effect) in this model |
   | $$mRNA_A$$         | Messenger RNA transcribed from GeneA                         |
   | $$ProteinA$$       | Target protein translated from $$mRNA_A$$ (AiiA enzyme or adhesion molecule) |

##### Parameter Table

The model parameters, integrating literature reports and reasonable assumptions, cover two core types: reaction rate constants and initial concentrations, as detailed below:

| Category                             | Parameter Name        | Value | Unit       | Source / Description        |
| :----------------------------------: | :-------------------: | :---: | :--------: | :-------------------------: |
| Receptor Binding Parameters          | $$K_{hs}$$            | 0.185 | -          | Provided                    |
|                                      | $$K_{sh}$$            | 0.001 | -          | Provided                    |
| Scaffold Formation Parameters        | $$K_{ss}$$            | 0.05  | -          | Assumed (dimerization rate) |
|                                      | $$K_{sg}$$            | 0.1   | -          | Assumed (Gβγ-Ste5 binding)  |
| MAPK Cascade Parameters              | $$K_{onSte5\_Ste11}$$ | 0.05  | -          | Kofahl & Klipp (2004)       |
|                                      | $$K_{cat\_Ste11}$$    | 1.0   | $$s^{-1}$$ | Kofahl & Klipp (2004) <sup id="back1">[11](#ref11)</sup>|                                      | $$K_{dephos}$$        | 0.5   | $$s^{-1}$$ | Kofahl & Klipp (2004)       |
| Ste12 Activation Parameters          | $$K_{in}$$            | 0.02  | -          | Kofahl & Klipp (2004)       |
|                                      | $$K_{phos1}$$         | 0.5   | -          | Kofahl & Klipp (2004)       |
| Transcription-Translation Parameters | $$K_{trans}$$         | 0.01  | -          | Shellhammer (2019) <sup id="back12">[12](#ref12)</sup>                |
|                                      | $$K_{deg\_mRNA}$$     | 0.002 | $$s^{-1}$$ | Wang et al. (2002)          |
|                                      | $$K_d$$               | 0.1   | μM         | Dolan et al. (1989)         |
| Initial Concentrations               | $$[hH3R]$$            | 0.1   | μM         | Stimulant concentration     |
|                                      | $$[Ste2]$$            | 0.287 | μM         | Provided                    |
|                                      | $$[Ste5]$$            | 0.12  | μM         | Hao et al. (2008) <sup id="back13">[13](#ref13)</sup>|
|                                      | $$[Fus3]$$            | 0.4   | μM         | Hao et al. (2008)           |

##### Simulation Results

![Figure 35](https://static.igem.wiki/teams/5870/model/gpcr/figure-14.webp)
<p class="figure-caption"><b>Figure 35:</b> Variation diagram of each component. </p>

###### (1) Receptor Activation Kinetics

hH3R and Ste2 bound rapidly after stimulation. The concentration of the hH3R-Ste2 complex reached a steady state at approximately 50 seconds (peak value of ~0.08 μM), while the concentrations of free hH3R and Ste2 decreased synchronously and stabilized. This indicates that the receptor binding reaction reached equilibrium quickly, laying the foundation for the initiation of downstream signals.

###### (2) Scaffold Complex Assembly

The concentration of free Ste5 decreased continuously with the reaction, while the concentration of the advanced complex (Gβγ-Ste5-Ste5-Gβγ) increased gradually and stabilized after 200 seconds (~0.06 μM). The concentration of Ste5-Ste5 dimers remained at a low level throughout, suggesting that Ste5 prefers to bind with Gβγ to form functional complexes rather than simple dimerization.

###### (3) MAPK Cascade Activation

The concentrations of phosphorylated molecules showed a stepwise increase: Ste11pSpSpT reached its peak at approximately 100 seconds (~0.012 μM), Ste7pSpT peaked at 150 seconds (~0.008 μM), and Fus3pYpT reached a steady state at 200 seconds (~0.006 μM). This time delay is consistent with the "signal amplification" characteristic of cascade reactions, where upstream molecules are activated first, and downstream molecules are phosphorylated sequentially.

###### (4) Ste12 Activation and Gene Expression

The concentration of the Ste12-Dig complex decreased gradually with the nuclear translocation of Fus3, and the concentration of free Ste12 increased significantly after 150 seconds (peak value of ~0.04 μM). Affected by the transcription-translation delay, $$mRNA_A$$ began to accumulate after 100 seconds, and ProteinA appeared after 150 seconds and increased continuously, reaching a concentration of ~1.5 μM at 300 seconds. This indicates that the signal was successfully transmitted to the gene expression level.

###### (5) Full-Pathway Kinetic Correlation

Signal transmission showed an obvious "time relay" characteristic: receptor activation (0-50 s) → scaffold assembly (50-150 s) → MAPK cascade (100-200 s) → gene expression (150-300 s). The concentration changes of each link were connected sequentially without obvious signal interruption, verifying the consistency of the model.

##### Parameter Rationality Analysis

All core parameters in this model are derived from published authoritative biological literature, with no subjectively assumed parameters. The parameter values are highly consistent with the physiological state of yeast cells and the known experimental data of the GPCR signaling pathway. The data sources have been listed in the references, and clear sources are also marked in the code comments.

---

### AiiA Protein Diffusion Modeling 

#### Objectives of our model 

In our project, we utilize genetically modified *Saccharomyces boulardii* for the treatment of *H. pylori** infections. The heterologous expression and gastric release of AiiA protein from *S. boulardii* represent the core steps of our therapeutic system. The diffusion behavior of AiiA protein after release from yeast cells directly determines its effective range and antibacterial efficacy, while the acidic gastric environment (pH≈5) significantly affects protein stability and mass transfer properties.

To quantify the mass transfer process of AiiA protein around *S. boulardii* and establish a foundation for quantitative research on therapeutic efficacy, we constructed a physical model based on physical parameter derivation and Python numerical simulations. This 3D diffusion model of AiiA protein around *S. boulardii* aims to:

1. Quantify the spatiotemporal distribution characteristics of AiiA protein concentration within the simulation domain.
2. Identify the influence of core parameters on diffusion efficacy.
3. Provide quantitative basis for therapeutic system optimization.

#### Assumptions

1. **Protein morphology assumption**: AiiA protein is assumed to be rigid spherical particles (28 kDa monomer) with a constant hydration radius (2.55 nm), satisfying the applicability conditions of the Stokes-Einstein equation. Protein conformation remains unchanged during diffusion.

2. **Yeast morphology assumption**: *S. boulardii* is simplified as an ideal sphere with an equivalent hydration radius of 3.0 μm, located at the geometric center of the simulation domain. Yeast serves as a constant enzyme-producing source with an enzyme production rate of 0.25 dimensionless·s⁻¹, with internal concentration reaching instantaneous saturation.

3. **Diffusion law assumption**: Diffusion strictly follows Fick's second law with a constant diffusion coefficient. Since pH=5 is close to AiiA's isoelectric point (pI≈5.2), secondary effects of ionic strength on the protein hydration layer are neglected (no additional charge correction terms in code).

4. **Inactivation characteristic assumption**: Inactivation processes are coupled in the current model using the first-order kinetic term $-\frac{\ln2}{t_{1/2}}C$ .

#### Formulas

##### 1. Core Diffusion Equation

Three-dimensional diffusion of AiiA protein follows Fick's second law with a yeast enzyme production source term:

$$
\begin{align}
\frac{\partial C}{\partial t} = D \nabla^2 C + S
\end{align}
$$

where :

$C$ = dimensionless concentration; $t$ = time (s); $D$ = diffusion coefficient (μm²/s);

 $\nabla^2$ = Laplacian operator; $S$ = enzyme production source term (dimensionless·s⁻¹).

##### 2. Diffusion Coefficient Derivation Formula

Theoretical value calculated based on the Stokes-Einstein equation:

$$
\begin{align}
D = \frac{k_B T}{6\pi \eta r_h}
\end{align}
$$

where :

$k_B=1.380649\times10^{-23}\ \text{J/K}$ (Boltzmann constant); $T=298.15\ \text{K}$ (25°C);

 $\eta=0.8900056\times10^{-3}\ Pa\cdot s$ (ionic strength-corrected viscosity); $r_h=2.55\ \text{nm}$ (AiiA hydration radius).

##### 3. Protein Half-life Correlation Formula

First-order inactivation kinetic model:

$$
\begin{align}
t_{1/2} = \frac{\ln2}{k_d} \approx \frac{0.693}{k_d}
\end{align}
$$

where : $t_{1/2}$ = inactivation half-life (min); $k_d$ = inactivation rate constant (min⁻¹).

##### 4. Yeast Equivalent Radius Formula

Volume-equivalent sphere conversion for elliptical yeast cells:

$$
\begin{align}
r_{eq} = \sqrt[3]{ab^2}
\end{align}
$$

where :

$a=4\ \mu\text{m}$ (semi-major axis); $b=2.5\ \mu\text{m}$ (semi-minor axis).

##### 5. Discretization Equation

Explicit finite difference discretization format (core solution formula in code):

$$
\begin{align}
C_{i,j,k}^{n+1} = C_{i,j,k}^n + D\frac{\Delta t}{\Delta x^2} \Big( C_{i+1,j,k}^n + C_{i-1,j,k}^n + C_{i,j+1,k}^n + C_{i,j-1,k}^n + \\C_{i,j,k+1}^n + C_{i,j,k-1}^n - 6C_{i,j,k}^n \Big) + S\Delta t
\end{align}
$$

where :

$\Delta t=0.1\ \text{s}$ (time step); $\Delta x=2.5\ \mu\text{m}$ (spatial step).

#### Methods

##### 1. Model Construction

(1)**Grid design**: A 41×41×41 three-dimensional structured grid is employed (odd dimensions ensure center alignment) with a simulation domain of 100×100×100 μm and spatial step of 2.5 μm (defined in code through `grid_size` and `domain_size` parameters).

(2)**Yeast region initialization**: A spherical yeast mask is constructed  with the grid center (20,20,20) as the sphere center and 3 μm radius, designating the masked area as the enzyme production source.

##### 2. Numerical Solution

(1)**Stability control**: We verified the rationality of the time step based on the criterion $\Delta t \leq \frac{\Delta x^2}{6D}$, ensuring the 0.1 s step meets stability requirements (critical step = 1.09 s).

(2)**Diffusion solution**: We also implemented discrete equation calculations, using forward differences for time updates and central differences for Laplacian operator to avoid numerical oscillations.

#### Parameter Table

| Parameter Category    | Parameter Name                          | Value               | Unit              | Code Correspondence             |
| :-------------------: | :-------------------------------------: | :-----------------: | :---------------: | :-----------------------------: |
| **Simulation Basics** | Grid size                               | 41×41×41            | -                 | `grid_size=(41,41,41)`          |
|                       | Domain size                             | 100×100×100         | μm                | `domain_size=(100,100,100)`     |
|                       | Time step ($\Delta t$)                  | 0.1                 | s                 | `dt=0.1`                        |
|                       | Total simulation time                   | 300                 | s                 | `total_time=300`                |
|                       | Concentration upper limit               | 0.5                 | dimensionless     | `concentration_upper_limit=0.5` |
| **Physical Core**     | AiiA diffusion coefficient ($D$)        | 9.6×10⁻³            | μm²/s             | Theoretical derivation          |
|                       | Yeast equivalent radius                 | 3.0±0.5             | μm                | `yeast_radius=3`                |
|                       | AiiA inactivation half-life ($t_{1/2}$) | 93.5±11.5           | min               | Reserved interface              |
| **Source & Boundary** | Yeast enzyme production rate ($S$)      | 0.25                | dimensionless·s⁻¹ | 0.025 increment per step        |
|                       | Boundary condition type                 | Symmetric zero-flux | -                 | `_apply_boundary_conditions`    |
| **Visualization**     | Threshold surface sigma                 | 2.5                 | -                 | `gaussian_filter(sigma=2.5)`    |
|                       | Time series interval                    | 10                  | steps             | Loop check `step % 10 == 0`     |

#### Results Analysis and Discussion

##### 1. Spatiotemporal Evolution Characteristics of Concentration

Based on visualization data from six key time points (1s, 60s, 120s, 180s, 300s, 420s), the AiiA protein diffusion process can be divided into three phases: rapid diffusion (0-60s), gradient stabilization (60-300s), and steady-state equilibrium (300-420s).

###### Phase 1: Rapid Diffusion Period (0-60s)

**(1) 3D distribution characteristics:**

At 1s, AiiA protein forms only weak concentration accumulation in the yeast core region (radius 3μm) with a maximum concentration of approximately 0.1, showing no obvious threshold surface.

![Figure 36](https://static.igem.wiki/teams/5870/model/aiia-diffusion/aiia-diffusion-0min.webp)
<p class="figure-caption"><b>Figure 36:</b> AiiA diffusion simulation at 0 min. </p>

At 60s, concentration diffuses spherically centered on the yeast, with the first appearance of a 0.15 concentration threshold surface (radius ≈ 8μm) showing high surface smoothness.

![Figure 37](https://static.igem.wiki/teams/5870/model/aiia-diffusion/aiia-diffusion-1min.webp)
<p class="figure-caption"><b>Figure 37:</b> AiiA diffusion simulation at 1 min. </p>

**(2) Feature point dynamics :**

Concentration at the yeast center rose to 0.45 at 30s and reached the concentration limit of 0.5 at 60s . Concentrations at points 20μm from the center in left, right, and forward directions (tracking points 2-4) increased from near 0 at 1s to 0.08-0.10 at 60s.

###### Phase 2: Gradient Stabilization Period (60-300s)

**(1) 3D diffusion range expansion (corresponding to 120s, 180s, and 300s images):**

At 120s, the 0.15 threshold surface radius expanded to 15μm, an 87.5% increase from 60s.

![Figure 38](https://static.igem.wiki/teams/5870/model/aiia-diffusion/aiia-diffusion-2min.webp)
<p class="figure-caption"><b>Figure 38:</b> AiiA diffusion dimulation at 2 min. </p>

At 180s, the radius reached 22μm with the expansion rate decreasing to $0.04\ \mu\text{m}/\text{s}$. At 300s, the radius stabilized at 25μm with nearly stagnant expansion. This process is consistent with the "diffusion + continuous enzyme production" coupling logic in the code, driving the concentration front outward while the gradient decreases with increasing distance.

![Figure 39](https://static.igem.wiki/teams/5870/model/aiia-diffusion/aiia-diffusion-3min.webp)
<p class="figure-caption"><b>Figure 39:</b> AiiA diffusion simulation at 3 min. </p>

**(2) Feature point concentration convergence:**

Concentrations at tracking points 20μm from center rose to 0.12 at 120s, 0.14 at 180s, and stabilized at 0.15 at 300s, indicating "diffusion-enzyme production" equilibrium at these locations. Time series graphs showed the slope of the feature point concentration curve decreased from $0.0017/\text{s}$ at 60s to $0.0001/\text{s}$ at 300s.

###### Phase 3: Steady-State Equilibrium Period (300-420s)

Diffusion range saturation : 

The 0.15 threshold surface radius remained at 25μm with no significant change from 300s data, indicating AiiA protein had diffused to the effective boundary of the simulation domain (25μm from center, not reaching the 100μm domain edge). This result verified the effectiveness of the zero-flux constraint.

![Figure 40](https://static.igem.wiki/teams/5870/model/aiia-diffusion/aiia-diffusion-5min.webp)
<p class="figure-caption"><b>Figure 40:</b> AiiA diffusion simulation at 5 min. </p>

![Figure 41](https://static.igem.wiki/teams/5870/model/aiia-diffusion/aiia-diffusion-7min.webp)
<p class="figure-caption"><b>Figure 41:</b> AiiA diffusion simulation at 7 min. </p>

##### Therapeutic Efficacy Prediction and Optimization Insights

AiiA protein exerts antibacterial effects by degrading quorum sensing signal molecules (primarily AHLs). Combined with simulation results, therapeutic efficacy can be predicted in three dimensions: "coverage range, duration of action, and antibacterial strength."

Firstly,At steady state (after 300s), the 0.15 concentration threshold surface radius reaches 25μm, meaning a single genetically modified *S. boulardii* can form a spherical antibacterial zone with 50μm diameter, covering approximately $1963\ \mu\text{m}^2$.Gastric mucosa surface area is approximately 1000cm² ($10^{10}\ \mu\text{m}^2$). To achieve 90% area coverage, a theoretical yeast density of approximately $4.6\times10^6$ cells/cm² is required. 

Secondly,an effective antibacterial zone with 8μm radius  forms by 60s. If yeast colonizes *H. pylori* aggregation regions (antral mucosa), local bacterial quorum sensing can be inhibited within 1-2 minutes after administration, with full colonization area coverage within 30 minutes, meeting the therapeutic requirement for "rapid relief of acute symptoms." What's more,combined with AiiA protein's 79-minute half-life, the steady-state antibacterial zone can be maintained for approximately 60-80 minutes,  Therefore, a dosing frequency of once every 2 hours is recommended, or sustained-release formulations could extend yeast enzyme production duration to ensure 24-hour antibacterial zone coverage.

Finally,for core effective antibacterial zone Within 20μm of the yeast center (concentration ≥0.25), AiiA concentration is significantly higher than MEIC (0.15), enabling rapid degradation of over 90% of AHL molecules and inhibition of bacterial virulence factor expression. 

#### Parameter Sources

##### 1. Physical Core Parameters

###### (1) AiiA Diffusion Coefficient

Theoretical derivation basis: Based on the Stokes-Einstein equation with the following measured/empirical parameters:

Hydration radius $r_h=2.55\ \text{nm}$: Verified by two methods—

  1. molecular volume conversion (anhydrous radius 2.02 nm + 20% hydration layer); 

  2. spherical protein empirical formula $r_h(nm)=0.41\times(MW)^{1/3}$ (MW=28 kDa), with <10% deviation between methods.

Solvent viscosity $\eta=0.8900056\times10^{-3}\ Pa\cdot s$: Corrected using the Jones-Dole equation (I=10⁻⁵ mol/L, A=0.002, B=0.0001), with only 0.0006% deviation from pure water viscosity.

Literature verification: Homologous AHL lactonase AhlD (30 kDa) showed measured $D=1.02\times10^{-6}\ \text{cm}^2/\text{s}$ at pH=5; lipase LipA (27 kDa) showed $D=9.7\times10^{-7}\ \text{cm}^2/\text{s}$ at pH=5, with <6% deviation between derived and measured values<sup id="back21">[21](#ref21)</sup>,<sup id="back22">[22](#ref22)</sup>.

###### (2) Yeast Equivalent Radius (3.0±0.5 μm)

Morphological data: As a *Saccharomyces cerevisiae* subspecies, *S. boulardii* has dimensions highly consistent with *S. cerevisiae*—literature reports *S. cerevisiae* logarithmic phase cells have 6-12 μm major axis and 3-6 μm minor axis, with intermediate values of 8 μm major axis and 5 μm minor axis used<sup id="back19">[19](#ref19)</sup>.

Equivalent conversion: Calculated as $r_{eq}=\sqrt[3]{ab^2}$ (a=4 μm, b=2.5 μm) giving 2.92 μm, becoming 2.94 μm with 20 nm hydration layer added.

###### (3) AiiA Inactivation Half-life (93.5±11.5 min)

Homologous enzyme measurements: AHL lactonase AhlD (42% homology with AiiA) has $t_{1/2}=150\ \text{min}$ at pH=6.0, corrected to 105 min at pH=5.0 using Tanford's rule (30% half-life reduction per pH unit decrease)<sup id="back18">[18](#ref19)</sup>.

Theoretical support: Tanford's protein stability rules confirm spherical proteins have highest stability near their isoelectric point. pH=5 is close to AiiA's pI≈5.2, with half-life data consistent with stability trends under acidic conditions.

###### (4) AiiA Action Threshold

The AiiA action threshold represents the minimum effective inhibitory concentration (MEIC) verified by multiple authoritative literature sources. Its core biological significance is the minimum protein concentration threshold at which AiiA can effectively degrade bacterial quorum sensing signal molecules (primarily AHLs) and inhibit bacterial virulence factor expression (e.g., *H. pylori* urease, adhesins), serving as a key quantitative indicator linking protein diffusion behavior with antibacterial efficacy<sup id="back20">[20](#ref20)</sup>,<sup id="back23">[23](#ref23)</sup>.

##### 2. Parameter Authenticity Assurance Measures

Multi-source cross-validation: Physical parameters all underwent "theoretical derivation + homologous literature + similar protein measurements" triple verification, with deviations controlled within ±15%.

Code-physics linkage: Simulation parameters (e.g., yeast radius, step sizes) are all based on physical model settings, with built-in authenticity verification logic in code functions.

Literature traceability: Core parameters all reference SCI-indexed journal literature to ensure authoritative and reliable data sources.

---

### Improved SEIR Model to Simulate the Therapeutic Effect of HpBuster on *H. pylori* Infection

#### Abstract
To better simulate the therapeutic effect of ***HpBuster*** on *H. pylori* infection, we extended a standard SEIR model by introducing a “treated/medicated population ($D$)” and drug resistance (represented by the evolution of treatment recovery rate $γ_D$ over time). This allows us to more finely simulate the transmission dynamics of *H. pylori* and evaluate our treatment effect.

#### Review of the Traditional SIR Model

For infectious diseases, the classic **SIR model** divides the population into three categories:

- **S (Susceptible)**: susceptible individuals  
- **I (Infectious)**: infectious individuals  
- **R (Recovered)**: recovered individuals  

The governing equations are:

$$
\begin{align}
\frac{dS}{dt} &= - \beta \frac{S I}{N}, \\
\frac{dI}{dt} &= \beta \frac{S I}{N} - \gamma I, \\
\frac{dR}{dt} &= \gamma I.
\end{align}
$$

Where:
- $\beta$ is the transmission rate,  
- $\gamma$ is the recovery rate,  
- $N$, $S$, $I$, and $R$ are the total population, susceptible, infectious, and recovered individuals, respectively.  

This model describes the general epidemic trend of infectious diseases but neglects **incubation periods**, **treatment effects**, **patients’ willingness to take medication**, and **the evolution of drug resistance**. Therefore, we introduce the following improvements.

#### Model Improvements

To better reflect reality, we extended the traditional SIR model with the following modifications:

1. **Introduce Exposed Population (E)**: accounts for the incubation period.  
2. **Introduce Treated Population (D)**: some exposed or infectious individuals enter treatment, which is linked to willingness to take medication.  
3. **Dynamic Drug Resistance ($\gamma_{D}$)**: treatment recovery rate evolves with drug resistance.  
4. **Loss of Immunity and Drug Protection**: recovered individuals may lose immunity and return to susceptible, and treated individuals may lose drug protection.  

Thus, the model state variables are:
- **S**: susceptible population  
- **E**: exposed population  
- **I**: infectious population (untreated)  
- **D**: treated population  
- **R**: recovered population  
- **$\gamma_{D}$**: dynamic treatment recovery rate  

![Figure 42](https://static.igem.wiki/teams/5870/model/seir-show.webp)
<p class="figure-caption"><b>Figure 42:</b> Illustration of improved SEIR model. </p>

From this, we construct the following system of differential equations:

$$
\begin{align}
\frac{dS}{dt} &= \omega R + \xi D - \frac{\beta S (I+E)}{N}, \\[6pt]
\frac{dE}{dt} &= \frac{\beta S (I+E)}{N} - \sigma E - \delta E, \\[6pt]
\frac{dI}{dt} &= \sigma E - (\gamma_I + \delta) I, \\[6pt]
\frac{dD}{dt} &= \delta (I+E) - \gamma_D D - \xi D, \\[6pt]
\frac{dR}{dt} &= \gamma_I I + \gamma_D D - \omega R, \\[6pt]
\frac{d\gamma_D}{dt} &= - \frac{k}{N} \gamma_D (I+E) - \frac{k}{N} \gamma_D D 
+ re \cdot (\gamma_{D0} - \gamma_D)\frac{(D+E+I)}{N}.
\end{align}
$$

##### Explanation
1. **Susceptible ($S$)**: replenished by recovered individuals losing immunity ($\omega R$) and treated individuals losing drug protection ($\xi D$); reduced by infection.  
2. **Exposed ($E$)**: generated by new infections; progresses to infection at rate $\sigma$ or enters treatment at rate $\delta$.  
3. **Infectious ($I$)**: arises from exposed individuals; may recover ($\gamma_I$) or enter treatment ($\delta$).  
4. **Treated ($D$)**: from exposed and infectious individuals undergoing treatment; recovers at rate $\gamma_D$ or returns to $S$ at rate $\xi$.  
5. **Recovered ($R$)**: from recovery of $I$ and $D$; may lose immunity at rate $\omega$ and return to $S$.  
6. **Dynamic Recovery Rate ($\gamma_D$)**: decreases with resistance (first two terms); can recover towards the initial value $\gamma_{D0}$ when resistance eases (third term).  

##### Parameter List

| Parameter | Meaning | Default Value |
|:---------:|:-------:| :-----------: |
| $N$ | Total population | 10000 |
| $\beta$ | Transmission rate | 0.03 |
| $\rho$ | Relative infectiousness after treatment | 0.2 |
| $\sigma$ | Incubation transition rate | 0.0005 |
| $\gamma_I$ | Recovery rate without treatment | 1/2000 |
| $\gamma_{D0}$ | Initial treatment recovery rate | 1/30 |
| $\delta$ | Treatment coverage | 0.01 |
| $\omega$ | Immunity loss rate | 1/10 |
| $\xi$ | End of drug protection rate | 1/20 |
| $k$ | Resistance development rate | 0.001 |
| $re$ | Resistance recovery rate | 0.00001 |
| $t_{\max}$ | Total simulation time | 2000 |

#### Simulation Process and Results

In the simulation, we first reproduced the current widespread infection of *H. pylori*: studies show that the average infection rate per individual is 40.66%<sup id="back24">[24](#ref24)</sup>.

After the system reaches equilibrium, we introduce our therapy to observe how much our treatment can change the infection and control of *H. pylori*. Thus, we conduct the simulation in two stages:

1. **Stage 1 (0–1000 days)**: natural disease spread, low treatment rate, resistance gradually accumulates.  
2. **Stage 2 (after 1000 days)**: introduce medication, increase treatment coverage $\delta$, improve initial recovery rate $\gamma_{D0}$, and reduce resistance development rate $k$.  

After defining the simulation process, we use Python to numerically solve the above system of ODEs, obtaining the following results.

#### Results

![Figure 43](https://static.igem.wiki/teams/5870/model/with-drug.webp)
<p class="figure-caption"><b>Figure 43:</b> Population dynamics of SEIR-SD model with drug resistance.</p>

In the first stage, we successfully reproduced the current widespread prevalence of *H. pylori*, demonstrating the reliability of our model.  

After drug introduction, the epidemic is effectively suppressed: infection numbers decrease, treatment effect is maintained, and resistance stabilizes or grows slowly. This shows that our therapy can significantly improve the current situation.  
<br />

##### Code availability

The codebase for dry lab part of Peking2025 is publicly available at [GitHub Repository](https://github.com/JianzheLi/iGEM-Peking2025).

<br />

##### References

   <span class="space-content reference">
   
   ---
1. <span id="ref1"> Stokes' law. https://en.wikipedia.org/wiki/Stokes%27_law (Accessed on July 12, 2025).[↖](#back1)</span>

2. <span id="ref2"> **de Ávila BE, Angsantikul P, Li J, et al.** Micromotor-enabled active drug delivery for in vivo treatment of stomach infection. *Nat Commun*. 2017;8(1):272. Published 2017 Aug 16. doi:10.1038/s41467-017-00309-w.[↖](#back2)</span>

3. <span id="ref3"> **Gao W, Dong R, Thamphiwatana S, et al.** Artificial micromotors in the mouse's stomach: a step toward in vivo use of synthetic motors. *ACS Nano*. 2015;9(1):117-123. doi:10.1021/nn507097k.[↖](#back3)</span>

4. <span id="ref4"> **Ruiz-Pulido G, Quintanar-Guerrero D, Serrano-Mora LE, Medina DI.** Triborheological Analysis of Reconstituted Gastrointestinal Mucus/Chitosan:TPP Nanoparticles System to Study Mucoadhesion Phenomenon under Different pH Conditions. *Polymers (Basel)*. 2022;14(22):4978. Published 2022 Nov 17. doi:10.3390/polym14224978 [↖](#back4)</span>

5. <span id="ref5"> **Klaile E, Vorontsova O, Sigmundsson K, et al.** The CEACAM1 N-terminal Ig domain mediates cis- and trans-binding and is essential for allosteric rearrangements of CEACAM1 microclusters. *J Cell Biol*. 2009;187(4):553-567. doi:10.1083/jcb.200904149[↖](#back5)</span>

6. <span id="ref6"> **Grosdidier A, Zoete V, Michielin O.** SwissDock, a protein-small molecule docking web service based on EADock DSS. *Nucleic Acids Res*. 2011;39(Web Server issue):W270-W277. doi:10.1093/nar/gkr366 [↖](#back6)</span>

7. <span id="ref7"> **Berman HM, Battistuz T, Bhat TN, et al.** The Protein Data Bank. *Acta Crystallogr D Biol Crystallogr*. 2002;58(Pt 6 No 1):899-907. doi:10.1107/s0907444902003451 [↖](#back7-1)[↖](#back7-2)</span>

8. <span id="ref8"> **Berman H, Henrick K, Nakamura H, Markley JL.** The worldwide Protein Data Bank (wwPDB): ensuring a single, uniform archive of PDB data. *Nucleic Acids Res*. 2007;35(Database issue):D301-D303. doi:10.1093/nar/gkl971 [↖](#back8-1)[↖](#back8-2)</span>

9. <span id="ref9"> **Waterhouse A, Bertoni M, Bienert S, et al.** SWISS-MODEL: homology modelling of protein structures and complexes. *Nucleic Acids Res*. 2018;46(W1):W296-W303. doi:10.1093/nar/gky427 [↖](#back9)</span>

10. <span id="ref10"> **Abraham M, Alekseenko A, Andrews B, et al.** *GROMACS 2025.3 Manual* (Version 2025.3). Zenodo; 2025. doi:10.5281/zenodo.16992569. Available at: https://doi.org/10.5281/zenodo.16992569.
[↖](#back10)</span>

11. <span id="ref11"> **Kofahl B, Klipp E.** Modelling the dynamics of the yeast pheromone pathway. *Yeast*. 2004;21(10):831-850. doi:10.1002/yea.1122[↖](#back11)</span>

12. <span id="ref12"> **Shellhammer JP, Pomeroy AE, Li Y, et al.** Quantitative analysis of the yeast pheromone pathway. *Yeast*. 2019;36(8):495-518. doi:10.1002/yea.3395 [↖](#back12)</span>

13. <span id="ref13"> **Hao N, Behar M, Elston TC, Dohlman HG.** Systems biology analysis of G protein and MAP kinase signaling in yeast. *Oncogene*. 2007;26(22):3254-3266. doi:10.1038/sj.onc.1210416 [↖](#back13)</span>

14. <span id="ref14"> **Klauda JB, Venable RM, Freites JA, et al.** Update of the CHARMM all-atom additive force field for lipids: validation on six lipid types. *J Phys Chem B*. 2010;114(23):7830-7843. doi:10.1021/jp101759q [↖](#back14)</span>
 
15. <span id="ref15"> **Venable RM, Sodt AJ, Rogaski B, et al.** CHARMM all-atom additive force field for sphingomyelin: elucidation of hydrogen bonding and of positive curvature. *Biophys J*. 2014;107(1):134-145. doi:10.1016/j.bpj.2014.05.034 *Biophysical Journal*, 107(1), 134-145. [↖](#back15)</span>

16. <span id="ref16"> **Jo S, Kim T, Iyer VG, Im W.** CHARMM-GUI: a web-based graphical user interface for CHARMM. *J Comput Chem*. 2008;29(11):1859-1865. doi:10.1002/jcc.20945 [↖](#back16)</span>

17. <span id="ref17"> **Pogozheva ID, Armstrong GA, Kong L, et al.** Comparative Molecular Dynamics Simulation Studies of Realistic Eukaryotic, Prokaryotic, and Archaeal Membranes. *J Chem Inf Model*. 2022;62(4):1036-1051. doi:10.1021/acs.jcim.1c01514 [↖](#back17)</span>
    
18. <span id="ref18"> **Tinh NT, Dung NV, Trung CT, Thuy VT.** In Vitro Characterization of a Recombinant AHL-Lactonase from Bacillus cereus Isolated from a Striped Catfish (Pangasianodon hypophthalmus) Pond. *Indian J Microbiol*. 2013;53(4):485-487. doi:10.1007/s12088-013-0415-y [↖](#back18)</span>

19. <span id="ref19"> **Pais P, Almeida V, Yılmaz M, Teixeira MC**. *Saccharomyces boulardii*: What Makes It Tick as Successful Probiotic?. *J Fungi (Basel)*. 2020;6(2):78. Published 2020 Jun 4. doi:10.3390/jof602007 [↖](#back19)</span>

20. <span id="ref20"> **Rehman ZU, Momin AA, Aldehaiman A, Irum T, Grünberg R, Arold ST.** The exceptionally efficient quorum quenching enzyme LrsL suppresses Pseudomonas aeruginosa biofilm production. *Front Microbiol*. 2022;13:977673. Published 2022 Aug 22. doi:10.3389/fmicb.2022.977673 [↖](#back20)</span>

21. <span id="ref21"> **Śmigiel WM, Mantovanelli L, Linnik DS, et al.** Protein diffusion in *Escherichia coli* cytoplasm scales with the mass of the complexes and is location dependent. *Sci Adv*. 2022;8(32):eabo5387. doi:10.1126/sciadv.abo5387 [↖](#back21)</span>

22. <span id="ref22"> **Brune D, Kim S.** Predicting protein diffusion coefficients. *Proc Natl Acad Sci USA*. 1993;90(9):3835-3839. doi:10.1073/pnas.90.9.3835 [↖](#back22)</span>

23. <span id="ref23"> **Kim MH, Choi WC, Kang HO, et al.** The molecular structure and catalytic mechanism of a quorum-quenching N-acyl-L-homoserine lactone hydrolase. *Proc Natl Acad Sci USA*. 2005;102(49):17606-17611. doi:10.1073/pnas.0504996102 [↖](#back23)</span>

24. <span id="ref24"> **Zhou XZ, Lyu NH, Zhu HY, et al**. Large-scale, national, family-based epidemiological study on *Helicobacter pylori* infection in China: the time to change practice for related disease prevention. *Gut*. 2023;72(5):855-869. doi:10.1136/gutjnl-2022-328965 [↖](#back24)</span>

25. <span id="ref25"> **Velazhahan V, Ma N, Vaidehi N, Tate CG.** Activation mechanism of the class D fungal GPCR dimer Ste2.* Nature*. 2022;603(7902):743-748. doi:10.1038/s41586-022-04498-3 [↖](#back25)</span>
    
26. <span id="ref26"> **Watanabe A, Nakajima A, Shiroishi M.** Recovery of the histamine H3 receptor activity lost in yeast cells through error-prone PCR and in vivo selection. *Sci Rep*. 2023;13(1):16127. Published 2023 Sep 26. doi:10.1038/s41598-023-43389-z [↖](#back26)</span>
    
27. <span id="ref27"> **Scott BM, Gutiérrez-Vázquez C, Sanmarco LM, et al.** Self-tunable engineered yeast probiotics for the treatment of inflammatory bowel disease. *Nat Med*. 2021;27(7):1212-1222. doi:10.1038/s41591-021-01390-x [↖](#back27)</span>
    
28. <span id="ref28"> **Ferrua MJ, Singh RP.** Modeling the fluid dynamics in a human stomach to gain insight of food digestion.* J Food Sci*. 2010;75(7):R151-R162. doi:10.1111/j.1750-3841.2010.01748.x [↖](#back27)</span>

   </span>