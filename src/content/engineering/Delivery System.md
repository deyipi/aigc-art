
In order to to ensure that our engineered yeast can penetrate the mucus layer and reach the stomach wall infected by *Helicobacter pylori*. We designed the delivery system. The construction of the whole system can be divided into two parts: one for gel encapsulation and the other for micro-motor preparation. Through five cycles of D-B-T-L, we adopted an integrated approach to merge the preparation process, enhancing its precision, integration, and scalability.

---

### Big Cycle 1: Gel encapsulation

Using calcium alginate for gel encapsulation not only helps protect the yeast in gastric acid and facilitates its release on the stomach wall, but also allows the yeast to aggregate into a 100μm-sized structure, which is suitable for micro-motor delivery.

---

#### D-B-T-L: Feasibility of Emulsion-Internal Gelation Method

##### Design

After conducting literature research and some iHP work, we decided to use the emulsion-internal gelation technology for the preliminary preparation of gel microbeads.

##### Build

We mixed a small amount of yeast suspension with sodium alginate, and dispersed the mixture in liquid paraffin containing 1% Span 80, and emulsified it using a computer-controlled magnetic stirrer at 200 rpm to promote emulsification and calcium carbonate dispersion. Finally, acetic acid was added to initiate gel formation.

##### Test

The gel was observed and photographed under an optical microscope, and gel image analysis was conducted on Cellpose using a micrometer scale to obtain data such as the average diameter and morphology of the gel. By observation and counting, the average number of yeast cells encapsulated in each gel bead was determined.

![Gel ncapsulation-1](https://static.igem.wiki/teams/5870/engineering/deliverysys/gel-encapsulation-1.webp)
<p class="figure-caption"><b>Figure 1:</b> Size distribution of the hydrogel beads. The histogram displays the frequency distribution of the hydrogel bead diameters, based on a sample of N=231 beads. The y-axis represents the count of beads within each diameter range.</p> 



However, the analysis found that the gel diameter is significantly greater than 100μm, with a large variance. Additionally, there are fewer yeast cells encapsulated, while there are more undissolved calcium carbonate particles.

##### Learn

The experimental results indicate that, with the emulsion-internal gelation technology, we can produce calcium alginate gels with well-preserved morphology and good mechanical properties. To better meet the requirements of our delivery system in terms of gel diameter and yeast encapsulation, we further reviewed the literature and optimized experimental parameters, including magnetic stirring speed, Span80 concentration, yeast cell suspension concentration, and the proportion of calcium carbonate added, through practical adjustments.

#### D-B-T-L: Optimization of Microsphere size

##### Design

This time, we redesigned the reagent formulation, ratios, and stirring speed in the emulsion–internal gelation method for preparing gel microspheres, and carried out multiple experiments, analyses, and optimizations.

##### Build

We dispersed a 1%–2% sodium alginate solution (with more concentrated yeast suspension) in liquid paraffin containing 0.5%–1% Span 80, and stirred the mixture with a computer-controlled magnetic stirrer at 250–400 rpm to promote emulsification and the dispersion of calcium carbonate. Finally, acetic acid was added to initiate the gelation process.

##### Test

As described in the first cycle, the gel was observed and imaged under an optical microscope, and Cellpose software was used for gel image analysis to obtain data such as the average diameter and morphology of the gels. By observation and counting, the average number of yeast cells encapsulated in each gel bead was determined.

![Gel ncapsulation-2](https://static.igem.wiki/teams/5870/engineering/deliverysys/gel-encapsulation-2.webp)
<p class="figure-caption"><b>Figure 2:</b> Size distribution of the gel diameter. Shows the frequency distribution of the diameters for the gel sample (N=44). The y-axis represents the count of beads found within each diameter range.</p>

It can be seen that the average diameter of the gels is close to the ideal value (100 μm) with a small variance. Observations also showed that the average number of yeast cells contained within a single gel exceeded 80.

##### Learn

Using the emulsion–internal gelation technique, calcium alginate gel microspheres encapsulating a considerable number of yeast cells can be obtained, with an ideal average diameter and relatively small variance. However, as a further improvement, upgrading to microfluidic technology may be a way to achieve further variance reduction and quantitative production.

---

### Big Cycle 2: Micromotor Construction

---

#### D-B-T-L: Feasibility of Micromotor Construction via Lyophilization and Powder Spraying

##### Design

We designed a two-step magnesium-based microelectrode preparation method—lyophilization followed by spraying—based on literature on drug delivery. Specifically, gel microspheres are lyophilized using a vacuum freeze dryer to form fine particles, which are then fixed onto glass slides and sprayed with magnesium powder of 20 nm particle size.

##### Build

We contacted Dr. Tong from our university’s School of Life Sciences to borrow a vacuum freeze dryer and seek guidance for conducting the lyophilization experiments. We also reached out to several micro-nano processing companies in hopes of collaborating on the magnesium powder spraying.

##### Test

We used an optical microscope to observe the morphology of the lyophilized gels, evaluating their diameter and degree of adhesion.

However, the connection between the lyophilization experiments and magnesium powder spraying turned out to be less promising. Direct vacuum freeze-drying without protectants led to significant shrinkage, collapse, and adhesion of the gel microspheres, making it impossible to obtain dried gels with a diameter of 100 μm, and thus failing to meet the requirements for spraying. Moreover, the micro-nano processing companies we contacted lacked the necessary safety qualifications for storing and handling fine magnesium powders, preventing them from carrying out experiments and testing.

##### Learn

We also contacted a company with experience in gel lyophilization and were informed that freeze-drying of calcium alginate gels requires precise temperature control and careful selection of protectants. The setbacks in both parts of the experiment led us to reconsider the feasibility and scalability of the three-step microelectrode preparation method—emulsion–internal gelation for gel preparation, lyophilization, and magnesium powder spraying. Our discussion concluded that this approach suffers from drawbacks such as large variance in gel diameters, separated preparation steps, and numerous influencing factors.

Meanwhile, in discussions with Professor Xuan Zhang from the Department of Pharmaceutics, School of Pharmacy, we were advised to prioritize an all-liquid-phase preparation method to avoid the liquid-to-solid drying transition of the gels as much as possible.

Building on the conclusions of Big Cycle 1, we decided to explore the microfluidic method, integrating gel formation with microelectrode preparation.

#### D-B-T-L: Feasibility of Micromotor Construction via Microfluidic Method 

##### Design

After reviewing the literature, we designed a “carbonate-based micromotor” powered by calcium carbonate (with calcium carbonate reacting with gastric acid to generate carbon dioxide bubbles that serve as thrust). Specifically, we prepared calcium alginate gels with nano-calcium carbonate particles on one end, encapsulating yeast to achieve an integrated fabrication. Referring to microfluidic methods for fabricating Janus structures, we collaborated with Dxfluidics to design microfluidic chip schematics for micromotor preparation.

##### Build

The designed microfluidic chip schematics were handed over to Dxfluidics for fabrication.

![Design of the microfluidic chip](https://static.igem.wiki/teams/5870/engineering/deliverysys/microfludicdrawings.webp)
<p class="figure-caption"><b>Figure 3:</b> Design of the microfluidic chip.</p>

##### Test

We contacted Engineer Shujing Wang from the Center for Quantitative Biology and, under her guidance, used microfluidic instruments and chips to attempt the fabrication of carbonate-based micromotors.

However, due to instrument limitations (specifically, the lack of an intermittent propulsion function), we were not able to successfully produce carbonate-based micromotors through the chip.

##### Learn

Although we did not obtain direct results in micromotor fabrication, our experimental design was affirmed by the engineer, provided that equipment limitations are not taken into account.

We now need alternative methods to verify the fabrication and functionality of the carbonate-based micromotors.

#### D-B-T-L: Feasibility of Micromotor Construction

##### Design

By connecting a syringe directly to the microfluidic tubing—without using the chip—we built a setup to simulate the junction conditions inside the chip for micromotor fabrication. With the larger tube diameter, we were no longer constrained to a 100 μm micromotor size, and instead prepared larger calcium alginate Janus structures with calcium carbonate on one end.

##### Build

Two syringes were filled separately with sodium alginate solution and sodium alginate solution dispersed with nano-calcium carbonate, then connected to microfluidic tubing. The parallel microfluidic tubing was positioned above a calcium chloride solution so that, upon pushing the syringes, Janus droplets were formed and solidified after dripping into the calcium chloride solution.

##### Test

The fabricated micromotor models were observed by the naked eye or under a stereomicroscope to estimate their diameter and evaluate the formation of the Janus structure. A 1M hydrochloric acid solution was used to simulate the gastric environment, into which the gel micromotor models were placed, and their motion was recorded on video.

![Macroscopic Simulation](https://static.igem.wiki/teams/5870/engineering/deliverysys/macromotor.webp)
<p class="figure-caption"><b>Figure 4:</b> Macroscopic simulation of carbonate-based micromotors.</p>

<iframe title="Peking: 195939_edit (2025)" width="560" height="315" src="https://video.igem.org/videos/embed/tNH7tsrDhTyrLiUeY9HP9N" allow="fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="border: 0px; display: block; margin: 20px auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1); border-radius: 8px;"></iframe>

The results showed that the gel micromotor models prepared using the simulated microfluidic method exhibited a well-defined Janus structure, with calcium carbonate retained on one end. Under simulated gastric pH conditions, they demonstrated good unidirectional motion capability.

##### Learn

Through preparation under simulated microfluidic conditions and validation in simulated gastric pH, we confirmed the feasibility of fabricating gel micromotors using the microfluidic method, as well as their motility in acidic environments. If conditions and time permit, we plan to fabricate gel micromotors of the desired size and further verify their functionality under gastric conditions with simulated mucus.