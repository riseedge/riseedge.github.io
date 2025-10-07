<!-- PROJECT BANNER -->
<p align="center">
  <img src="../assets/logo.png" alt="RiseEdge Logo" width="250"/>
</p>

<h2 align="center">AXI Protocol Verification Environment (SystemVerilog UVM)</h2>

<p align="center">
  <!-- <a href="https://www.edaplayground.com/x/MjLG"><b>▶ Run on EDA Playground</b></a><br> -->
  <img src="https://img.shields.io/badge/Language-SystemVerilog-blue.svg"/>
  <img src="https://img.shields.io/badge/Methodology-UVM%201.2-green.svg"/>
  <img src="https://img.shields.io/badge/Simulator-VCS%2FEDAPlayground-orange.svg"/>
</p>


## Project Overview

This repository contains a **UVM-based verification environment** for the **AXI protocol** (Advanced eXtensible Interface).  
The testbench validates AXI **read** and **write** transactions, monitors channel activity, and verifies compliance with the **valid-ready handshake** and **response timing rules** defined in the AMBA AXI4-Lite specification.

This project is part of **RiseEdge’s UVM Verification Catalog**, aimed at creating reusable, configurable, and open verification environments for standard SoC protocols.

## AXI Protocol Summary

**AXI (Advanced eXtensible Interface)** is a part of ARM’s AMBA interconnect family widely used in SoC designs.  
It separates read and write channels and supports high-performance parallel transfers.

| Feature | Description |
|----------|--------------|
| Separate Channels | Independent address, data, and response channels for read & write |
| Handshake | VALID/READY mechanism for every channel |
| Ordering | Out-of-order completion allowed |
| Burst Support | Incremental and single bursts |
| Response | BRESP/RRESP indicate success/failure |


## Example UVM Log

```
# KERNEL: --- UVM Report Summary ---
# KERNEL: 
# KERNEL: ** Report counts by severity
# KERNEL: UVM_INFO :   45
# KERNEL: UVM_WARNING :    0
# KERNEL: UVM_ERROR :    0
# KERNEL: UVM_FATAL :    0
# KERNEL: ** Report counts by id
# KERNEL: [*** SCOREBOARD  PASS ***]    18
# KERNEL: [*** SCOREBOARD SAMPLED ***]    18
# KERNEL: [ADDR CHECK]     1
# KERNEL: [DATA CHECK]     1
# KERNEL: [DRIVER - TRANSACTION NUMBER]     2
# KERNEL: [DRIVER-CONNECTION DONE]     1
# KERNEL: [MY_COVERAGE]     1
# KERNEL: [RNTST]     1
# KERNEL: [TEST_DONE]     1
# KERNEL: [UVM/RELNOTES]     1
# KERNEL: 
# RUNTIME: Info: RUNTIME_0068 uvm_root.svh (521): $finish called.
# KERNEL: Time: 575 ns,  Iteration: 57,  Instance: /tb_top,  Process: @INITIAL#72_2@.
# KERNEL: stopped at time: 575 ns
# VSIM: Simulation has finished. There are no more test vectors to simulate.
# ACDB: Covergroup Coverage data has been saved to "fcover.acdb" database.
# VSIM: Simulation has finished.

````

## How to Run

<!-- ### Run Online
**EDA Playground Link:** [https://www.edaplayground.com/x/MjLG](https://www.edaplayground.com/x/MjLG)
1. Open the link above  
2. Select **UVM 1.2 + QuestaSim**  
3. Click **Run**  
4. View simulation logs and waveforms -->

### Run Locally
```bash
# Compile
vlog *.sv
# Simulate
vsim -c tb_top -do "run -all; quit"
````


## Future Extensions

* Add **AXI4 full** protocol (burst, size, len, ID support)
* Include **functional coverage bins** for transactions
* Integrate **register-level RAL model**
* Extend to **multi-master / multi-slave topology**
* Include **assertion-based protocol checks (SVA)**


## Tools & Environment

| Component   | Version                                                           |
| ----------- | ----------------------------------------------------------------- |
| Language    | SystemVerilog (IEEE 1800-2017)                                    |
| Methodology | UVM 1.2                                                           |
| Simulator   | VCS / EDA Playground                                              |
| Platform    | Linux / Windows                                                   |
| Author      | RiseEdge                                                          |


## References

* ARM AMBA AXI4 & AXI4-Lite Specification
* Accellera UVM 1.2 User Guide
* Doulos UVM Training Resources
* Verification Academy AXI Protocol Guide
* Open Source EDA AXI UVM bench link: https://www.edaplayground.com/x/v36G


<p align="center">
  <b>© 2025 RiseEdge Verification Catalog</b><br>
</p>
