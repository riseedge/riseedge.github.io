<!-- PROJECT BANNER -->
<p align="center">
  <img src="../assets/logo.png" alt="RiseEdge Logo" width="250"/>
</p>

<h2 align="center">JTAG (IEEE 1149.1) TAP Controller Verification (SystemVerilog UVM)</h2>

<p align="center">
  <!-- <a href="https://www.edaplayground.com/x/ipdm"><b>▶ Run on EDA Playground</b></a><br> -->
  <img src="https://img.shields.io/badge/Language-SystemVerilog-blue.svg"/>
  <img src="https://img.shields.io/badge/Methodology-UVM%201.2-green.svg"/>
  <img src="https://img.shields.io/badge/Simulator-VCS%2FEDAPlayground-orange.svg"/>
</p>


## Project Overview

This repository implements a **UVM-based verification environment** for the **JTAG TAP Controller** as defined by **IEEE 1149.1**.  
The testbench validates **TAP state machine transitions**, **IR/DR shifting**, and **instruction decoding**, ensuring full compliance with boundary scan and debug access behavior.

This JTAG environment is part of **RiseEdge’s UVM Verification Catalog**, which includes reusable benches for industry-standard SoC interfaces such as **SPI**, **APB**, **AHB**, **AXI**, and **JTAG**.


## JTAG Protocol Summary

**JTAG (Joint Test Action Group)** provides a standardized test access mechanism used for boundary scan testing, in-system programming, and debugging of digital ICs.

| Signal | Description |
|---------|--------------|
| **TCK** | Test clock driving all TAP operations |
| **TMS** | Test mode select (controls TAP state transitions) |
| **TDI** | Test data input (serial scan input) |
| **TDO** | Test data output (serial scan output) |
| **TRST** | Optional asynchronous TAP reset |

The JTAG TAP implements a 16-state **finite state machine (FSM)** handling both instruction and data register access via serial shifting.

## Example UVM Log

```
--- UVM Report Summary ---

** Report counts by severity
UVM_INFO :   53
UVM_WARNING :    0
UVM_ERROR :    0
UVM_FATAL :    0
** Report counts by id
[ARGS]     1
[DRIVER]    32
[DR_READ]    16
[RNTST]     1
[TEST]     1
[TEST_DONE]     1
[jtag_tdr_write_read_seq]     1
$finish called from file "/apps/vcsmx/vcs/U-2023.03-SP2//etc/uvm-1.1/src/base/uvm_root.svh", line 437.
$finish at simulation time                  705
           V C S   S i m u l a t i o n   R e p o r t 
Time: 705 ns
CPU Time:      0.400 seconds;       Data structure size:   0.3Mb

````
## How to Run

<!-- ### Run Online
**EDA Playground Link:** [https://www.edaplayground.com/x/ipdm](https://www.edaplayground.com/x/ipdm)

1. Open the link  
2. Select **SystemVerilog + UVM 1.2**  
3. Click **Run**  
4. View the logs and waveforms for TAP transitions -->

### Run Locally
```bash
# Compile
vlog *.sv
# Simulate
vsim -c tb_top -do "run -all; quit"
````

## Tools & Environment

| Component   | Version                                                           |
| ----------- | ----------------------------------------------------------------- |
| Language    | SystemVerilog (IEEE 1800-2017)                                    |
| Methodology | UVM 1.2                                                           |
| Simulator   | VCS / EDA Playground                                              |
| Platform    | Linux / Windows                                                   |
| Author      | RiseEdge                                                          |

## References

* IEEE Standard 1149.1 (JTAG) – Test Access Port and Boundary-Scan Architecture Specification
* Accellera UVM 1.2 User Guide
* Doulos UVM Training Resources

<p align="center">
  <b>© 2025 RiseEdge Verification Catalog</b><br>
</p>
