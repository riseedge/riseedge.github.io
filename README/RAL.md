<!-- PROJECT BANNER -->
<p align="center">
  <img src="../assets/logo.png" alt="RiseEdge Logo" width="250"/>
</p>

<h2 align="center">Register Abstraction Layer (RAL) Verification Environment (SystemVerilog UVM)</h2>

<p align="center">
  <!-- <a href="https://www.edaplayground.com/x/d5AV"><b> Run on EDA Playground</b></a><br> -->
  <img src="https://img.shields.io/badge/Language-SystemVerilog-blue.svg"/>
  <img src="https://img.shields.io/badge/Methodology-UVM%201.2-green.svg"/>
  <img src="https://img.shields.io/badge/Simulator-VCS%2FEDAPlayground-orange.svg"/>
</p>

## Project Overview

This project implements a **UVM Register Abstraction Layer (RAL)** environment for verifying register read/write operations over a **bus interface (APB)**.  
The RAL enables high-level, transaction-based access to DUT registers without requiring direct signal-level control, promoting scalability and reusability across verification projects.

This RAL implementation is part of **RiseEdge’s UVM Verification Catalog**, extending beyond protocol verification (SPI, APB, AHB, AXI, JTAG) into **register-level modeling and abstraction-based testing**.


## Concept Summary

The **UVM Register Abstraction Layer (RAL)** provides a standardized way to represent, access, and verify registers in a DUT.  
It connects to the DUT’s bus through an **adapter** and performs **read/write sequences** via the **UVM Register Model**.

### Key Components

| Component | Description |
|------------|--------------|
| **Register Model (uvm_reg, uvm_reg_block)** | Models DUT registers and their fields |
| **Adapter (reg2apb_adapter)** | Converts RAL transactions to bus transactions |
| **Predictor** | Updates the RAL mirror after successful access |
| **Bus Agent (APB)** | Drives and monitors actual bus-level activity |
| **Sequences** | Perform read, write, and reset verification |
| **Scoreboard** | Compares mirrored and DUT register values |


## Example UVM Log

```

--- UVM Report Summary ---

** Report counts by severity
UVM_INFO :   14
UVM_WARNING :    1
UVM_ERROR :    0
UVM_FATAL :    0
** Report counts by id
[RNTST]     1
[STARTING_SEQ]     1
[TEST_DONE]     1
[UVM/RELNOTES]     1
[UVM/RSRC/NOREGEX]     1
[uvm_reg_bit_bash_seq]    10

$finish called from file "/apps/vcsmx/vcs/U-2023.03-SP2//etc/uvm-1.2/src/base/uvm_root.svh", line 527.
$finish at simulation time                46395
           V C S   S i m u l a t i o n   R e p o r t 
Time: 46395 ns
CPU Time:      0.480 seconds;       Data structure size:   0.4Mb

````

## How to Run

<!-- ### Run Online
**EDA Playground Link:** [https://www.edaplayground.com/x/d5AV](https://www.edaplayground.com/x/d5AV)

1. Open the link  
2. Choose **SystemVerilog + UVM 1.2**  
3. Click **Run**  
4. Observe RAL build and access logs in the transcript -->

### Run Locally
```bash
# Compile all files
vlog *.sv
# Simulate
vsim -c tb_top -do "run -all; quit"
````

## Future Extensions

* Integrate **coverage bins** for register and field activity
* Add **mirror mismatch assertion hooks**
* Include **UVM RAL Layer-to-Layer comparison**
* Expand for **multi-block register maps**
* Support **AXI-based RAL access**

## Tools & Environment

| Component   | Version                                                           |
| ----------- | ----------------------------------------------------------------- |
| Language    | SystemVerilog (IEEE 1800-2017)                                    |
| Methodology | UVM 1.2                                                           |
| Simulator   | QuestaSim / EDA Playground                                        |
| Platform    | Linux / Windows                                                   |
| Author      | **Sri Sai Rakesh Nakkilla** – Arizona State University / RiseEdge |


## References

* Accellera UVM 1.2 User Guide – Register Layer Chapter
* AMBA APB Protocol Specification
* Doulos UVM Register Modeling Tutorials
* Verification Academy RAL Architecture Reference


<p align="center">
  <b>© 2025 RiseEdge Verification Catalog</b><br>
</p>

