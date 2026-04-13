![Figure](https://static.igem.wiki/teams/5870/model/model-total.avif)

*Helicobacter pylori* infection affects over half of the population. This seemingly tiny bacterium can cause chronic gastritis, gastric ulcers, and even increase the risk of gastric cancer. Once infected, it often remains dormant in the body for a long time, severely impacting quality of life.

Traditionally, we have relied primarily on combination therapy, primarily antibiotics, which initially achieved eradication rates of approximately 90%. However, with the rise of drug resistance, efficacy has steadily declined. Furthermore, antibiotics indiscriminately damage the intestinal flora, leading many patients to experience side effects such as diarrhea and bloating. Later, probiotics were tried as adjunctive therapy or even as monotherapy, but the results have been less than ideal, with eradication rates often below 30%. The core problem is that probiotics, as large particles, have difficulty penetrating gastric mucus and reaching the deeper layers where *H. pylori* accumulates. To this end, we designed a highly efficient delivery system. The stomach's highly acidic environment and thick mucus layer have always been two major obstacles for drugs to reach the site of *H. pylori* infection. We encapsulated the modified yeast into microspheres using a pH-responsive gel—a gel that remains stable in gastric acid (pH < 4) and only dissolves and releases upon reaching the gastric mucosa (pH 6-7). Crucially, we loaded the microspheres with calcium carbonate-based micromotors, which provide propulsion and help the microspheres penetrate the viscous mucus layer and reach the "lesions" where *H. pylori* accumulates.

Thus, in the dry lab, we aimed to model the drug's journey from entry into the body and gradual diffusion into the stomach wall, its penetration of the gastric mucus layer under the propulsion of the micromotors, its adhesion to the *H. pylori*, activation of the GPCR response pathway, and secretion of AiiA (killer protein), as well as the impact of drug intervention on the spread of *H. pylori* in the human population. In the following content, we will follow this logic to introduce our drylab content.

---

### Dissolution Kinetics Modeling of pH-Sensitive Microspheres
First, we needed to ensure that our living drug would not lose its activity in the highly acidic environment of gastric fluid. Therefore, we devised a gel coating method. This prevented the Saccharomyces boulardii from dying in gastric fluid. Furthermore, to ensure that it could sense and respond properly deep within the gastric mucus layer, we also needed to ensure that the outer shell would readily degrade in a neutral environment. Therefore, we first needed to simulate the degradation of the entire gel under different pH conditions.

#### Mathematical Modeling

We model the dissolution of alginate-based drug-loaded microspheres using a **first-order kinetic model**. The main assumption is that the dissolution rate is proportional to the amount of undissolved material remaining at any given time. Mathematically, this can be expressed as:

$$
\begin{equation}
\frac{dM(t)}{dt} = -k \cdot M(t)
\end{equation}
$$
where:

- $M(t)$: mass (or fraction) of undissolved microspheres at time t*t*
- $k$: dissolution rate constant, which depends on pH

Solving the differential equation by separation of variables gives:

$$
\begin{align}
\frac{dM}{M} &= -k \, dt \\
\int \frac{1}{M} \, dM &= -k \int dt \\
\ln M &= -kt + C \\
M(t) &= M_0 \cdot e^{-kt}
\end{align}
$$

Assuming $ M_0 = 1 $ ( 100% undissolved at $t=0$ ), it further simplifies to:

$$
\begin{equation}
M(t) = e^{-kt}
\end{equation}
$$

In real scenarios, the rate constant *k* varies with pH, so we further model:

$$
\begin{equation}
k = f(\mathrm{pH})
\end{equation}
$$

This allows the prediction of drug release profiles at arbitrary pH levels.



#### Computational Method with Simulation 

**Workflow:**

1. Collect experimental data of undissolved mass vs. time at different pH values.
2. Fit each data to the exponential decay model to extract the rate constant $ k $.
3. Fit the $ k $ pH relationship using a suitable nonlinear function (see Figure 1).
4. Use the fitted $ k(pH) $ to simulate release curves under any target pH. Here we consider k as a function of ph.

**Test data:**

| t (min) | pH = 1.5 | pH = 3.0 | pH = 5.0 | pH = 7.0 | 
|:-----------:|:------------:|:------------:|:------------:|:------------:|
| 0           | 1.00         | 1.00         | 1.00         | 1.00         |
| 5           | 0.95         | 0.88         | 0.40         | 0.10         |
| 10          | 0.88         | 0.75         | 0.23         | 0.05         |
| 15          | 0.82         | 0.65         | 0.10         | 0.00         |
| 20          | 0.77         | 0.50         | 0.00         | 0.00         |


Tabulated experimental data (The values in the table represent the percentage of undepolymerization.) Here, due to reasons such as the amount of experiments, we were unable to conduct large-scale experiments. Therefore, in order to illustrate the reliability of our method, we used simulated data as a demonstration.

#### Result

We used the above data to calculate and obtained the following results.

![Figure 1](https://static.igem.wiki/teams/5870/model/k-vs-ph.webp)
<p class="figure-caption"><b>Figure 1:</b> Dissolution rate constant k as a function of pH.</p>

After obtaining the functional relationship of $k$ with respect to pH, we can then predict the change in the percentage of undegraded gel microspheres over time at any given pH.

![Figure 2](https://static.igem.wiki/teams/5870/model/predicted-curve-ph-2-0.webp)
<p class="figure-caption"><b>Figure 2:</b> Model-predicted undissolved fraction curve at pH = 2.0.</p>



![Figure 3](https://static.igem.wiki/teams/5870/model/predicted-curve-ph-6-0.webp)
<p class="figure-caption"><b>Figure 3:</b> Model-predicted undissolved fraction curve at pH = 6.0.</p>

In real-world experiments, we found that in a strongly acidic environment, the microspheres remained undegraded for up to an hour. In a neutral environment, however, the gel microspheres completely degraded in about 90 seconds, which was close to our prediction.

---

### Propulsion Model of Micropheres in Acidic Solution

#### Background
Next, we simulated the velocity of the microspheres after entering the human body, driven by the calcium carbonate reaction. We simulated the propulsive force of calcium carbonate-coated microspheres in gastric fluid and reviewed the classical Stokes solution for low Reynolds number flow around a sphere. We derived the equations of motion and simulated the velocity-time behavior to obtain the velocity of the microspheres in the liquid environment.


#### Parameters and Physical Assumptions

We consider a spherical $CaCO_3$ microsphere with:  

- Mass: $m = 1\times 10^{-7}\,\mathrm{kg}$ (100 $\mu g$)  
- Density: $\rho = 3.000\,\mathrm{g/cm^3}$  

At the same time, by consulting the literature, we can also obtain the parameters of the gastric mucus layer：

Its radius is determined by:  

$$
\begin{align}
r = \left(\frac{3m}{4\pi \rho}\right)^{1/3}
\end{align}
$$

Assume the CaCO₃ reacts with excess acid at pH 2, producing CO₂ by  

$$
\begin{align}
CaCO3(s) + 2H^+ (aq) \rightarrow Ca^{2+}(aq) + CO2(g) + H2O(l)
\end{align}
$$

Assuming the entire CaCO₃ sphere reacts over time $T_{\mathrm{react}}$, the maximum CO₂ generation rate is:  

$$
\begin{align}
\dot m_{\mathrm{CO}_2} = \frac{m}{T_{\mathrm{react}}} \cdot \frac{M_{\mathrm{CO}_2}}{M_{\mathrm{CaCO}_3}} = 
\frac{m}{T_{\mathrm{react}}}\cdot \frac{44.01}{100.09} 
\end{align}
$$

where $M_{\mathrm{CO}_2}$ and $M_{\mathrm{CaCO}_3}$ are the molar masses of CO₂ (44.01 g/mol) and CaCO₃ (100.09 g/mol), respectively.  

The thrust is generated by the liberation of CO₂, imparting momentum to the particle (neglecting losses):  

$$
\begin{align}
F_{\mathrm{thrust}} = \dot m_{\mathrm{CO}_2} v_{\mathrm{ex}}
\end{align}
$$

where $v_{\mathrm{ex}}$ denotes the effective exhaust velocity of CO₂ as it escapes (estimation: $v_{\mathrm{ex}}$ can be approximated as gas flow velocity at interface, typically 10–30 m/s per microfluidics literature).  

#### Modeling the Drag Force in Fluid

The drag force is described using Stokes law.  

##### Stream Function in Cylindrical Coordinates

For an incompressible, axisymmetric, low-Reynolds-number flow past a fixed sphere of radius $R$ in a uniform stream $u$, introduce the Stokes stream function $\psi(r,z)$ satisfying:  

$$
\begin{align}
u_z = \frac{1}{r} \frac{\partial \psi}{\partial r}, \quad
u_r = -\frac{1}{r} \frac{\partial \psi}{\partial z}
\end{align}
$$

which ensures $\nabla\cdot\mathbf{u}=0$ by construction.  

##### Vorticity and Governing Equations

The sole nonzero vorticity is:  

$$
\begin{align}
\omega_\varphi = \frac{\partial u_r}{\partial z} - \frac{\partial u_z}{\partial r} 
= -\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial \psi}{\partial r}\right) 
 - \frac{1}{r}\frac{\partial^2 \psi}{\partial z^2} 
\end{align}
$$

and it satisfies:  

$$
\begin{align}
\nabla^2 \omega_\varphi = 0
\end{align}
$$

##### Exact Solutions for Stream Function and Velocities

The well-known solution is:  

$$
\begin{align}
\psi(r,z) = -\frac{1}{2} u r^2 \left[1 - \frac{3R}{2\sqrt{r^2+z^2}} + \frac{1}{2}\left(\frac{R}{\sqrt{r^2+z^2}}\right)^3\right]
\end{align}
$$

leading to velocity components $u_r(r,z)$ and $u_z(r,z)$.  

##### Vorticity, Pressure, and Drag Force

The azimuthal vorticity and pressure fields are:  

$$
\begin{align}
\omega_\varphi(r, z) = -\frac{3Ru}{2}\frac{r}{(r^2+z^2)^{3/2}}, \quad
p(r, z) = -\frac{3\mu R u}{2} \frac{z}{(r^2 + z^2)^{3/2}}
\end{align}
$$

In spherical coordinates:  

$$
\begin{align}
p(r, \theta) = -\frac{3\mu R u}{2} \frac{\cos\theta}{r^2}
\end{align}
$$

The total drag force—evaluated via surface integration of the stress tensor—is:  

$$
\begin{align}
\mathbf{F}_d = 6\pi \mu R\,\mathbf{u}
\end{align}
$$

where $\mu$ is the dynamic viscosity of the surrounding solution (for water at 25 °C, $\mu=5\times10^{-3}$ Pa·s<sup id="back1">[4](#ref4)</sup>; acidic media similar). This classical Stokes drag formula is valid for $Re \leq 1$ <sup id="back1">[1](#ref1)</sup>. 

#### Equation of Motion

Applying Newton's second law:  

$$
\begin{align}
m \frac{dv}{dt} = F_{\mathrm{thrust}}(t) - F_{d} = \dot m_{\mathrm{CO}_2} v_{\mathrm{ex}} - 6\pi \mu r v
\end{align}
$$

with $F_{\mathrm{thrust}}$ as above. If $\dot{m}_{\mathrm{CO}_2}$ is constant, the analytical solution for velocity is straightforward. If time-varying, a numerical solution is required. So we will get the numerical solution through numerical simulation.  

#### Result

In summary, we wrote a program in Python to solve the ODE equations above. We then plotted the velocity-time curve.

![Figure 4](https://static.igem.wiki/teams/5870/model/caco3-speed-prediction.webp)
<p class="figure-caption"><b>Figure 4:</b> Predicting the speed of a microsphere.</p>

The results showed that the microspheres' speed in the stomach was relatively stable, maintaining a constant speed of around 20 micrometers per second when only the micromotor (calcium carbonate) and acid reaction were considered. To further ensure the accuracy and reliability of our model, we consulted relevant literature. Existing articles have shown that similar methods have also achieved microsphere movement speeds of 20-150 $\mu m/s$ micrometers per second<sup id="back1">[2](#ref2)</sup>,<sup id="back1">[3](#ref3)</sup>, demonstrating the validity of our model.

At the same time, take into account the possible adverse effects of gas release，we can simply calculate the amount of gas released during the reaction of each microsphere.

![Figure 5](https://static.igem.wiki/teams/5870/model/co2-release-volume.webp)
<p class="figure-caption"><b>Figure 5:</b> CO<sub>2</sub> release dynamics predition.</p>

One microsphere will only produce about 0.01 ml of gas, which means that taking 2g of the drug will only produce 80 ml of gas, which is safe enough for the human body.

---

### Mathematical Modeling of Microsphere Diffusion in the Stomach

#### Background  
To study the movement, diffusion, and contact of gel microspheres in the gastric cavity in drug delivery systems, we establish a dynamic model combining **Brownian motion**, **gastric fluid flow**, and **boundary conditions**. The goal is to predict the spatial distribution of microspheres, adhesion ratio, and excretion over a given timescale.

#### Model Assumptions  
1. **Geometry**: The gastric cavity is defined by two eighth-order polynomial curves (lesser curvature and greater curvature), forming a closed region $\Omega$.  
2. **Movement**: Microsphere movement is driven by Brownian diffusion and gastric fluid flow.  
3. **Boundary conditions**: Microspheres near the gastric wall have a probability of adhesion; if they reach the outlet, they are considered excreted.  

#### Mathematical Model  

##### 1. Gastric Cavity Boundary  
$$
\begin{align}
(x_s(t), y_s(t)), \ (x_l(t), y_l(t)), \quad t \in [0,1]
\end{align}
$$

Here $s$ denotes the lesser curvature and $l$ denotes the greater curvature. The gastric cavity region is:  

$$
\begin{align}
\Omega = \{ (x,y) \ | \ x_s(t) \leq x \leq x_l(t), \ y \in [y_{\min}, y_{\max}] \}
\end{align}
$$

##### 2. Microsphere Dynamics  
Each microsphere position $$(x,y)$$ satisfies the update equations:  

$$
\begin{align}
x(t+\Delta t) = x(t) + \Delta x_{\text{diff}} + \Delta x_{\text{flow}}
\end{align}
$$
$$
\begin{align}
y(t+\Delta t) = y(t) + \Delta y_{\text{diff}} + \Delta y_{\text{flow}}
\end{align}
$$

- **Diffusion term** (Brownian motion):  
$$
\begin{align}
\Delta x_{\text{diff}} \sim \mathcal{N}(0, \sqrt{2D\Delta t}), \quad 
\Delta y_{\text{diff}} \sim \mathcal{N}(0, \sqrt{2D\Delta t})
\end{align}
$$

- **Flow term**:  
$$
\begin{align}
(\Delta x_{\text{flow}}, \Delta y_{\text{flow}}) = v \cdot \hat{\mathbf{v}}(x,y) \cdot \Delta t
\end{align}
$$

where $v$ is the average flow velocity and $\hat{\mathbf{v}}(x,y)$ is the locally normalized velocity direction.  

##### 3. State Transitions  
Microspheres exist in three states:  

- **Free state** ($S=0$): moving freely;  
- **Attached state** ($S=1$): 
$$
\begin{align}
d((x,y), \partial\Omega) \le r \quad \Rightarrow \quad S=1 \ \text{ with probability } \ p_{\text{attach}}
\end{align}
$$
- **Exited state** ($S=2$):
$$
\begin{align}
(x,y) \notin \Omega \quad \Rightarrow \quad S=2
\end{align}
$$

#### Simulation Results  
We perform simulation according to the above formula. We also observed the effects of the drug 60 seconds and 10 minutes after it entered the body. Through numerical simulations (initial microsphere number $N=1000$, total simulation time 600s), the following conclusions are drawn:  

![Figure 6](https://static.igem.wiki/teams/5870/model/snapshot-61s.webp)  
<p class="figure-caption"><b>Figure 6:</b> The diffusion of microspheres in the stomach was observed in 60 seconds.</p>

![Figure 7](https://static.igem.wiki/teams/5870/model/microsphere-simulation.webp)  
<p class="figure-caption"><b>Figure 7:</b> The diffusion of microspheres in the stomach.</p>

1. Microspheres gradually deposit in the gastric fundus region under diffusion and flow effects, continually contacting the gastric wall. At 60 seconds, a large number of microspheres have diffused to the surface of the stomach wall. 
2. Over time, the number of free microspheres decreases, the proportion of attached microspheres increases, and some microspheres are excreted through the outlet.  
3. **Long-term simulation results show that about 80% of gel microspheres eventually contact and adhere to the gastric wall**, while the remaining microspheres mainly exist in free or excreted forms.<sup id="back28">[28](#ref28)</sup> 

---

### Physical Modeling of the Penetration Process of Microspheres through Gastric Mucus Layer

#### Background
The objective of this section is to establish a physical model to describe and analyze the penetration process of a microsphere drug delivery system through the gastric mucus layer. In our design, the drug is encapsulated in a pH-responsive hydrogel microsphere, with calcium carbonate-based micromotors loaded on its surface. Upon entering the stomach, the microspheres remain stable in the acidic environment and release the drug when approaching the gastric mucosa. A key challenge lies in effectively penetrating the thick gastric mucus layer to reach the *H. pylori* aggregation region.

We aim to answer the following questions through our physical model:

1. What are the conditions for microsphere penetration of the mucus layer?
2. How does the incident angle $\theta$ affect penetration efficiency? Is there a maximum angle $\theta_{max}$ such that penetration is possible when $\theta \leq \theta_{max}$? What is the corresponding penetration probability?
3. How do mucus thickness $H$, viscosity $\eta$, microsphere radius $R$, and propulsion speed $v$ affect the penetration conditions?

![Figure 8](https://static.igem.wiki/teams/5870/model/micromotor.webp)
<p class="figure-caption"><b>Figure 8:</b> Illustration of microspheres through gastric mucus layer.</p>

#### Model Assumptions
To simplify the complex real-world situation, we make the following assumptions:

- **Microsphere assumption**:  
  The microsphere is a rigid sphere with radius $R$ and mass $m$. It moves at a constant velocity $v$ with a fixed incident angle $\theta$. The propulsion force always aligns with the direction of motion.

- **Medium assumption**:  
  The mucus layer has thickness $H$, modeled as a uniform Newtonian fluid with constant viscosity $\eta$, independent of velocity. The mucus layer boundaries are clearly defined.

- **Mechanical assumption**:  
  Upon entering the mucus layer, the microsphere is subject to:
  - Propulsion force $F_p$;
  - Viscous resistance $F_d$, described by Stokes' law:
    $$
    \begin{align}
    F_d = 6\pi \eta R v
    \end{align}
    $$
  - The relationship between propulsion force and velocity has been simulated in previous work, showing that in the mucus layer region, velocity $v \approx 50\ \mu\text{m/s}$.

  Gravity and buoyancy are neglected.

- **Energy criterion assumption**:  
  The criterion for penetration is that the microsphere’s kinetic energy in the vertical direction must be greater than or equal to the energy needed to overcome resistance and interfacial effects.

#### Mathematical Modeling Process

##### Time and Angle Relationship from the Perspective of Uniform Motion

###### Arrival Time and Incident Angle
A microsphere moves with velocity $v$ at constant speed into a mucus layer of thickness $H$, with incident angle $\theta$ (relative to the perpendicular direction).  

Its travel path length is:
$$
\begin{align}
L(\theta) = \frac{H}{\cos\theta}, \quad (\cos\theta > 0).
\end{align}
$$

The time to reach the gastric wall is:
$$
\begin{align}
t(\theta) = \frac{L(\theta)}{v} = \frac{H}{v \cos\theta}.
\end{align}
$$

Rearranging:
$$
\begin{align}
\cos\theta = \frac{H}{vt}, \qquad 
\theta(t) = \arccos\!\left(\frac{H}{vt}\right),
\end{align}
$$
where $t \geq \tfrac{H}{v}$ is required for physical meaning.

###### Reachable Angle Condition
If the microsphere has a maximum sustainable travel time $T$, then only when
$$
\begin{align}
t(\theta) \leq T
\end{align}
$$
can it reach the gastric wall. That is:
$$
\begin{align}
\frac{H}{v \cos\theta} \leq T \quad \Longleftrightarrow \quad \cos\theta \geq \frac{H}{vT}.
\end{align}
$$

Therefore, the critical incident angle is:
$$
\begin{align}
\theta_{\max} = \arccos\!\left(\frac{H}{vT}\right).
\end{align}
$$

Boundary cases:
- If $T < H/v$, no angles can reach;
- If $T = H/v$, only vertical incidence $\theta=0$ can reach;
- If $T > H/v$, all $\theta \in [0,\theta_{\max}]$ are reachable.

###### Penetration Probability (Uniform Angle Distribution Assumption)
Assuming the incident angle is uniformly distributed over $[0,\pi/2]$, the reachable probability is:
$$
\begin{align}
P = \frac{\theta_{\max}}{\pi/2} = \frac{2}{\pi}\,\arccos\!\left(\frac{H}{vT}\right), 
\qquad \text{when } \frac{H}{vT}\leq 1.
\end{align}
$$

###### Numerical Calculation
Experiments and literature show that $H=150\ \mu\text{m}, T=90\ \text{s}$, with $v \approx 50\ \mu\text{m/s}$ in the mucus layer region:

$$
\begin{align}
\frac{H}{vT} = \frac{150}{50 \times 90} = \tfrac{1}{30},
\theta_{\max} = \arccos\!\left(\tfrac{1}{30}\right) \approx 88.1^\circ,
\end{align}
$$

penetration probability:
$$
\begin{align}
P = \frac{88.1 ^\circ}{90 ^\circ} \approx 97.9\%.
\end{align}
$$

#### Results and Physical Interpretation
- Increasing viscosity $\eta$, radius $R$, or thickness $H$ increases required energy, reducing the critical angle $\theta_{\max}$, requiring incidence closer to vertical.
- Increasing velocity $v$ increases kinetic energy, increasing $\theta_c$, making penetration easier at larger angles.
- **Under current assumptions, most microspheres can penetrate the gastric mucus layer and reach the gastric wall.**

Overall, we establishes an energy-based physical model describing the microsphere penetration process through the gastric mucus layer, deriving an analytical expression for the critical incident angle $\theta_{\max}$ and estimating the penetration range. The model reveals how velocity, radius, viscosity, and thickness affect penetration ability, providing a theoretical basis for optimizing microsphere design and guiding subsequent experiments.

---

### Molecular Dynamics Simulation Analysis of the HopQ-C1ND Protein Complex

#### Background
HopQ, a type I adhesin of *H. pylori*, mediates bacterial colonization and regulates host immune responses by specifically binding to the N-terminal domain (C1ND) of CEACAM1 on human host cells. CEACAM1 is a core molecular pair in *H. pylori* pathogenesis<sup id="back5">[5](#ref5)</sup>. We achieved targeted adhesion to *H. pylori* by displaying C1ND on the surface of yeast.

Molecular dynamics (MD) simulations can track the motion of atoms under physiological conditions and dynamically analyze the structural stability of protein complexes. We used MD simulations to study the dynamic behavior of the HopQ-C1ND complex under physiological conditions, providing theoretical validation for our project's adhesion system.

#### Indicators of the Molecular Dynamics Simulation
1. The protein complex is recognized to maintain stable overall conformation under simulated physiological conditions (300 K, 1 atm, aqueous environment), with backbone root-mean-square deviation (RMSD) stabilizing within a physiologically reasonable range of ≤0.35 nm in the later simulation stages.

2. The binding interface region of the complex  is considered to exhibit higher structural flexibility compared to core domains, with significantly increased root-mean-square fluctuation (RMSF) values, and this flexibility directly correlates with binding specificity and dynamic regulatory functions.

3. Complex stability is supposed to be maintained through synergistic effects of multiple non-covalent interactions, with van der Waals forces and electrostatic forces as primary driving forces, and the total binding free energy showing a significantly negative value, indicating thermodynamically spontaneous and stable binding.

4. After energy minimization and NVT/NPT equilibration, physical parameters including temperature, pressure, and density are required to converge to physiologically steady-state ranges (temperature fluctuation ≤1 K, pressure approaching 1 atm, density ≈1000 kg/m³), to unsure biological relevance of simulation results.

5. The solvent-accessible surface area (SASA) and radius of gyration (Rg) of the complex are required to exhibit small fluctuation amplitudes during simulation, with hydrogen bond counts maintained at high levels, which collectively reflect conformational stability.

#### Methods
This study conducted all-atom molecular dynamics simulations using GROMACS 2018.8 software<sup id="back10">[10](#ref10)</sup>, with the following workflow:


##### Target Protein Structure Acquisition and Screening
Target Protein Structure Acquisition and Screening
High-resolution experimental structures were retrieved and screened from the Protein Data Bank (PDB)<sup id="back7-1">[7](#ref7)</sup>,<sup id="back8-1">[8](#ref8)</sup> :

- **HopQ monomer structure:** PDB ID 5LP2 (X-ray diffraction, 2.60 Å resolution, no mutations, expressed in E. coli);
- **C1ND (CEACAM1 N-domain) structure:** PDB ID 4WHD (X-ray diffraction, 2.50 Å resolution, homodimer, human origin);
- **HopQ-CEACAM1 complex reference structure:** PDB ID 6AW2 (X-ray diffraction, 2.68 Å resolution, heterodimer, containing complete binding interface).

All structures were validated using the wwPDB Validation tool, with Ramachandran plot favored regions ≥95% and no significant structural defects.

##### Protein Structure Preprocessing

1. **Structure splitting and integration**: Binding interface coordinates of HopQ and CEACAM1 were extracted from 6AW2, with 5LP2 and 4WHD as templates to generate initial HopQ-C1ND complex structure using PyMOL;

2. **Residue repair**: Missing residues 120-125 in 5LP2 and broken peptide bonds in 4WHD were completed using the SWISS-MODEL server<sup id="back6">[6](#ref6)</sup>,<sup id="back9">[9](#ref9)</sup>, with modeling templates selected from homologous structures with ≥85% sequence identity (GMQE=0.85, QMEAN=-1.2);

3. **Structure optimization**: Atomic overlaps in the repaired structure were eliminated through energy minimization to ensure bond lengths and angles conform to standard force field parameters.

![Figure 9](https://static.igem.wiki/teams/5870/model/adhesion/figure-1.webp)
<p class="figure-caption"><b>Figure 9:</b> The structure of HopQ-CEACAM1 complex.</p>

##### Topology File Construction and Force Field Selection
1. **Force field selection**: The OPLS-AA/L all-atom force field was chosen for its high accuracy in describing protein-ligand interactions, widely applied in protein complex simulations;

2. **Topology file generation**: GROMACS' `gmx pdb2gmx` module was used to assign force field parameters to the complex, generating topology (top) and coordinate (gro) files;

3. **Ion and solvent models**: The SPC water model was used to describe water molecules, with Cl⁻ ions added to neutralize total system charge (0.15 mol/L ion concentration, simulating physiological salt environment).

    ```bash
    gmx pdb2gmx -f 6AW2.pdb -o 6AW2_processed.gro -water tip3p `
    ```

##### Simulation Environment Construction
1. **Boundary conditions**: Cubic periodic boundary conditions were employed, with minimum distance between box edges and protein surface set to 10 Å to ensure complete solvent encapsulation;

   ```bash
   gmx editconf -f 6AW@_processed.gro -o 6AW2_newbox.gro -c -d 1.2 -bt cubic
   ```

2. **Solvent filling**: Approximately 25,000 SPC water molecules were added using the `gmx solvate` module;

   ```bash
   gmx solvate -cp 6AW2_newbox.gro -cs spc216.gro -o 6AW2_solv.gro -p topol.top
   ```
   ![Figure 10](https://static.igem.wiki/teams/5870/model/adhesion/figure-2.webp)   
   <p class="figure-caption"><b>Figure 10:</b> HopQ-CEACAM1 complex after solvent filling.</p>

3. **Ion addition**: Water molecules in the solvent box were replaced with Cl⁻ ions using `gmx genion` to neutralize system charge (total charge +4, 4 Cl⁻ ions added).

   ```bash
   gmx grompp -f inputs/ions.mdp -c 6AW2_solv.gro -p topol.top -o ions.tpr
   
   gmx genion -s ions.tpr -o 6AW2_solv_ions.gro -p topol.top -pname NA -nname CL -neutral
   ```

![Figure 11](https://static.igem.wiki/teams/5870/model/adhesion/figure-3.webp)
<p class="figure-caption"><b>Figure 11:</b> HopQ-CEACAM1 complex after ion addition.</p>

##### Pre-Simulation Equilibration
1. **Energy minimization**: Combined "steepest descent (1000 steps) + conjugate gradient (5000 steps)" methods were used for energy minimization, with termination condition of maximum force ≤1000 kJ/(mol·nm), resulting in final system potential energy below -4.4×10⁶ kJ/mol;
   ```bash
   gmx grompp -f inputs/minim.mdp -c 6AW2_solv_ions.gro -p topol.top -o em.tpr
   
   gmx mdrun -v -deffnm em
   
   gmx energy -f em.edr -o potential.xvg
   ```
  ![Figure 12](https://static.igem.wiki/teams/5870/model/adhesion/figure-4.webp)
  <p class="figure-caption"><b>Figure 12:</b> Energy change during energy minimization.</p>

2. **NVT equilibration**: 200 ps simulation under constant volume (V) and temperature (T=300 K) conditions, using V-rescale thermostat for temperature control, 2 fs integration step, with protein backbone atoms constrained (LINCS algorithm) to stabilize system temperature at 300±1 K;
   ```bash
   gmx grompp -f inputs/nvt.mdp -c em.gro -r em.gro -p topol.top -o nvt.tpr
   
   gmx mdrun -deffnm nvt
   
   gmx energy -f nvt.edr -o temperature.xvg
   ```
   ![Figure 13](https://static.igem.wiki/teams/5870/model/adhesion/figure-5.webp)
   <p class="figure-caption"><b>Figure 13:</b> Temperature change during NVT equilibration.</p>

3. **NPT equilibration**: 200 ps simulation under constant pressure (P=1 atm) and temperature (T=300 K) conditions, using Parrinello-Rahman barostat with compressibility 4.5×10⁻⁵ bar⁻¹ to stabilize system density at 1000±5 kg/m³.
   ```bash
   gmx grompp -f inputs/npt.mdp -c nvt.gro -r nvt.gro -t nvt.cpt -p topol.top -o npt.tpr
   
   gmx mdrun -deffnm npt
   
   gmx energy -f npt.edr -o pressure.xvg
   ```
   ![Figure 14](https://static.igem.wiki/teams/5870/model/adhesion/figure-6.webp)
   <p class="figure-caption"><b>Figure 14:</b> Density change during NPT equilibration.</p>

   ![Figure 15](https://static.igem.wiki/teams/5870/model/adhesion/figure-7.webp)
   <p class="figure-caption"><b>Figure 15:</b> Pressure change during NPT equilibration.</p>

##### Production Simulation and Result Analysis
1. **Production run**: 100 ns NPT ensemble simulation with parameters consistent with equilibration, trajectory saved every 10 ps;
   ```bash
   gmx grompp -f inputs/md.mdp -c npt.gro -t npt.cpt -p topol.top -o md_0_10.tpr
   
   gmx mdrun -deffnm md_0_10
   ```

2. **Trajectory analysis**: Core indicators calculated using GROMACS modules:
   
   `gmx rms`: Backbone Cα atom RMSD calculation;

   `gmx rmsf`: Per-atom RMSF calculation;

   `gmx gyrate`: Total Rg and axial Rg calculation;

   `gmx sasa`: Total SASA and binding interface SASA calculation;

   `gmx hbond`: Hydrogen bond counting (criteria: donor-acceptor distance ≤0.35 nm, angle ≥150°);

   `gmx mmpbsa`: Binding free energy calculation using MM-GBSA method;

3. **Visualization and plotting**: Protein structures visualized with PyMOL, and indicator curves plotted with QtGrace.

#### Parameter Table

| Parameter Category         | Specific Parameter             | Value/Setting                                | Description                                                  |
| :------------------------: | :----------------------------: | :------------------------------------------: | :----------------------------------------------------------: |
| **Simulation Basics**      | Software version               | GROMACS 2018.8                               | Industry-standard MD simulation software                     |
|                            | Target structure PDB IDs       | HopQ:5LP2; C1ND:4WHD; Complex reference:6AW2 | All high-resolution X-ray structures                         |
| **Force Field & Models**   | All-atom force field           | OPLS-AA/L                                    | Suitable for protein complex interaction simulations         |
|                            | Water model                    | SPC                                          | Fast equilibration with accurate protein interaction description |
|                            | Ion type & concentration       | Cl⁻, 0.15 mol/L                              | Simulates physiological salt environment, neutralizes charge |
| **Simulation Environment** | Boundary conditions            | Cubic periodic                               | Eliminates boundary effects                                  |
|                            | Box size                       | ≥10 Å from protein surface to box wall       | Ensures complete solvent encapsulation                       |
|                            | Number of water molecules      | ~25000                                       | Meets physiological water environment requirements           |
| **Energy Minimization**    | Algorithm                      | Steepest descent + conjugate gradient        | Efficiently eliminates high-energy defects                   |
|                            | Termination condition          | Max force ≤1000 kJ/(mol·nm)                  | System reaches low-energy steady state                       |
|                            | Final potential energy         | ≤-4.4×10⁶ kJ/mol                             | Energy converges to reasonable range                         |
| **Equilibration (NVT)**    | Ensemble type                  | NVT (constant volume, temperature)           | Establishes reasonable kinetic energy distribution           |
|                            | Thermostat                     | V-rescale                                    | High-precision temperature control                           |
|                            | Target temperature/fluctuation | 300 K / ≤1 K                                 | Simulates human physiological temperature                    |
|                            | Simulation time                | 200 ps                                       | Sufficient temperature convergence                           |
| **Equilibration (NPT)**    | Ensemble type                  | NPT (constant pressure, temperature)         | Achieves volume and density rationalization                  |
|                            | Barostat                       | Parrinello-Rahman                            | Suitable for pressure control in flexible systems            |
|                            | Target pressure/density        | 1 atm / ~1000 kg/m³                          | Conforms to physiological physical parameters                |
|                            | Simulation time                | 200 ps                                       | Sufficient pressure and density stabilization                |
| **Production Simulation**  | Ensemble type                  | NPT                                          | Maintains physiological environment parameters               |
|                            | Simulation duration            | 100 ns                                       | Captures long-term dynamic conformational changes            |
|                            | Integration step               | 2 fs                                         | Matches force field time scale                               |
|                            | Trajectory saving frequency    | 10 ps                                        | Balances data volume and analysis precision                  |
| **Analysis Parameters**    | RMSD calculation atoms         | Backbone Cα atoms                            | Reflects overall conformational stability                    |
|                            | Hydrogen bond criteria         | Distance ≤0.35 nm, angle ≥150°               | Industry-standard thresholds                                 |
|                            | Binding free energy method     | MM-GBSA                                      | Accurately evaluates thermodynamic stability                 |


#### Results

##### Validation of Simulation System Equilibrium
1. **Energy convergence characteristics**: During energy minimization, total system potential energy decreased from initial -2.0×10⁶ kJ/mol to -4.4×10⁶ kJ/mol, with bond length, bond angle, and dihedral energies converging synchronously (fluctuation amplitude ≤5%), indicating complete elimination of unreasonable interatomic interactions. Potential energy remained stable during NVT and NPT equilibration with no significant jumps, confirming establishment of energy steady state.

2. **Temperature and pressure dynamics**: Temperature rapidly increased to 300 K during initial NVT equilibration (0-50 ps), then stabilized at 300±0.5 K with Gaussian distribution (mean 300 K, standard deviation 0.3 K); pressure gradually converged to 1±50 atm from initial fluctuations (-400~200 atm) during NPT equilibration, with amplitude ≤20 atm by 200 ps; density stabilized at 1000±2 kg/m³ after 100 ps NPT equilibration, consistent with liquid water density. All parameters met physiological steady-state standards, validating the rationality of the simulation environment.


##### Overall Structural Stability of Protein Complex
1. **RMSD time evolution**: Backbone Cα atom RMSD showed "three-stage" behavior:
   
   Initial stage (0-20 ns): Rapid increase (0.10→0.28 nm), corresponding to initial conformational adjustment in aqueous environment;

   Transition stage (20-80 ns): Slow increase with minor fluctuations (0.28→0.30 nm), representing local structural optimization;

   Stable stage (80-100 ns): Stabilized at 0.29±0.01 nm with fluctuation amplitude ≤0.02 nm and no significant drift, indicating achievement of stable overall complex structure.

   ![Figure 16](https://static.igem.wiki/teams/5870/model/adhesion/figure-8.webp)
   <p class="figure-caption"><b>Figure 16:</b> RMSD analysis during simulation.</p>

2. **Radius of gyration (Rg) characteristics**: Total Rg remained stable at 3.02±0.03 nm throughout 100 ns simulation with only 0.99% coefficient of variation, demonstrating good overall compactness without significant expansion or contraction. Axial Rg analysis showed:
   
   X-axis Rg: 1.5-2.8 nm, mean 2.1±0.17 nm, coefficient of variation 8.2%;
   
   Y-axis Rg: 2.0-2.9 nm, mean 2.4±0.16 nm, coefficient of variation 6.5%;
   
   Z-axis Rg: 1.5-2.8 nm, mean 2.2±0.17 nm, coefficient of variation 7.9%.
   
   Maximum X-axis Rg fluctuation, combined with secondary structure analysis, is hypothesized to be related to flexible movement of HopQ's α-helix terminal segment (5LP2: residues 250-260).

   ![Figure 17](https://static.igem.wiki/teams/5870/model/adhesion/figure-10.webp)
   <p class="figure-caption"><b>Figure 17:</b> Radius of gyration during simulation.</p>

3. **Solvent-accessible surface area (SASA)**: Total SASA averaged 195±15 nm² with range 180-210 nm² and 7.7% coefficient of variation. Binding interface SASA decreased to 45±5 nm² in later simulation stages, approximately 18% lower than initial stage (55 nm²), indicating increased burial of interface residues within the molecule after binding, reducing solvent exposure and further enhancing complex stability.

   ![Figure 18](https://static.igem.wiki/teams/5870/model/adhesion/figure-12.webp)
   <p class="figure-caption"><b>Figure 18:</b> Solvent-accessible surface area during simulation.</p>

##### Local Structural Flexibility Characteristics (RMSF Analysis)
RMSF profiles revealed significant flexibility differences across complex regions, categorized into three types:

1. **Low flexibility regions (RMSF≤0.2 nm)**: Mainly distributed in complex core domains, including 4WHD's β-sheet region (residues 10-50) and 5LP2's β-barrel region (residues 80-120). Restricted atomic movement in these regions forms the structural scaffold, providing stable support for binding.

2. **Moderate flexibility regions (0.2-0.4 nm)**: Located at junctions between α-helices and β-sheets (e.g., 5LP2 residues 150-170). Moderate flexibility in these regions enables conformational fine-tuning of core domains, avoiding binding energy loss from rigid structures.

3. **High flexibility regions (RMSF≥0.4 nm)**: Precisely localized at the HopQ-C1ND binding interface, including 5LP2 residues 210-230 (RMSF=0.55±0.03 nm) and 4WHD residues 80-100 (RMSF=0.52±0.04 nm). Sequence analysis showed these regions are enriched in polar amino acids (Asp, Lys, Asn), whose dynamic movement modulates hydrogen bond and electrostatic interaction formation, enhancing binding specificity.

![Figure 19](https://static.igem.wiki/teams/5870/model/adhesion/figure-9.webp)
<p class="figure-caption"><b>Figure 19:</b> RMSF analysis during simulation.</p>

##### Intermolecular Interaction Characteristics
1. **Hydrogen bond network**: Hydrogen bond count remained stable at 2000-2500 pairs during simulation, averaging 2250±150 pairs. Trajectory tracking identified 12 high-frequency stable hydrogen bonds (duration ≥80 ns), with core pairs including:
   - 5LP2: Arg185 - 4WHD: Glu92 (92 ns duration);
   - 5LP2: Asn201 - 4WHD: Lys88 (88 ns duration);
   - 5LP2: Tyr215 - 4WHD: Asp76 (85 ns duration).

   These hydrogen bonds are located at the binding interface center, representing key interactions maintaining complex stability.

   ![Figure 20](https://static.igem.wiki/teams/5870/model/adhesion/figure-13.webp)
   <p class="figure-caption"><b>Figure 20:</b> Hydrogen bond analysis during simulation.</p>

2. **Binding free energy analysis**: MM-GBSA calculations showed total binding free energy (TOTAL) of -34864.90±500 Kcal/mol, with significantly negative value indicating thermodynamically spontaneous and stable binding. Energy component contributions were:
   - Van der Waals energy (VDWAALS): -11490.15 Kcal/mol, accounting for 32.9% of total binding energy as primary driving force;
   
   - Electrostatic energy (EEL): -6965.76 Kcal/mol, 19.9% contribution, synergizing with van der Waals forces to enhance binding;
   
   - Generalized Born solvation energy (EGB): -4679.48 Kcal/mol, with polar solvation effects favoring complex stability;
   
   - Surface energy (ESURF): 155.09 Kcal/mol, with positive nonpolar solvation contribution offset by EGB, resulting in total solvation free energy (GSOLV) of -4524.39 Kcal/mol;
   
   - Gas-phase free energy (GGAS): -3574.99 Kcal/mol, reflecting stability of intramolecular interactions.
   

   ![Figure 21](https://static.igem.wiki/teams/5870/model/adhesion/figure-14.webp)
   <p class="figure-caption"><b>Figure 21:</b> Free energy analysis during simulation.</p>
