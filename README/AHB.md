<!-- PROJECT BANNER -->
<p align="center">
  <img src="../assets/logo.png" alt="RiseEdge Logo" width="250"/>
</p>

<h2 align="center">AHB Protocol Verification Environment (SystemVerilog UVM)</h2>

<p align="center">
  <!-- <a href="https://www.edaplayground.com/x/a_fy"><b> Run on EDA Playground</b></a><br> -->
  <img src="https://img.shields.io/badge/Language-SystemVerilog-blue.svg"/>
  <img src="https://img.shields.io/badge/Methodology-UVM%201.2-green.svg"/>
  <img src="https://img.shields.io/badge/Simulator-XCelium%2FEDAPlayground-orange.svg"/>
</p>


## Project Overview

This repository provides a **UVM-based verification testbench** for the **AMBA AHB (Advanced High-Performance Bus)** protocol.  
The testbench verifies **read/write transactions**, **transfer sequencing**, and **response handshakes (HREADY, HRESP)** between AHB master and slave components.

This environment is a part of **RiseEdge’s UVM Verification Catalog**, a collection of reusable verification environments for standard SoC protocols (SPI, APB, AHB, AXI, JTAG, etc.).


## AHB Protocol Summary

**AHB (Advanced High-Performance Bus)** is a pipelined bus protocol from ARM’s AMBA family, widely used for connecting high-performance system components such as CPUs, DMA controllers, and memory interfaces.

| Feature | Description |
|----------|--------------|
| Pipelined Transfers | Address and data phases occur concurrently |
| Single Master–Multiple Slaves | Central decoder selects target slave |
| Handshake Signals | `HREADY` controls transfer completion |
| Burst Support | Supports single, increment, and wrap bursts |
| Transfer Type | Defined using `HTRANS` signal |
| Response | `HRESP` indicates OKAY or ERROR |


## Example UVM Log

```

--- UVM Report Summary ---

** Report counts by severity
UVM_INFO :   27
UVM_WARNING :    0
UVM_ERROR :    0
UVM_FATAL :    0
** Report counts by id
[RNTST]     1
[TEST_DONE]     1
[ahb_agent]     5
[ahb_driver]     3
[ahb_monitor]    11
[ahb_mst_rand_seq]     3
[ahb_slv_resp_seq]     2
[tb]     1
Simulation complete via $finish(1) at time 1055 NS + 49
/xcelium23.09/tools/methodology/UVM/CDNS-1.1d/sv/src/base/uvm_root.svh:457     $finish;
xcelium> exit
TOOL:	xrun	23.09-s001: Exiting on Oct 06, 2025 at 19:44:06 EDT  (total: 00:00:08)
Finding VCD file...
./dump.vcd
Done

````

<!-- ## How to Run -->

<!-- ### Run Online
**EDA Playground Link:** [https://www.edaplayground.com/x/a_fy](https://www.edaplayground.com/x/a_fy)

1. Open the link above  
2. Select **SystemVerilog + UVM 1.2**  
3. Click **Run**  
4. View simulation logs and waveform -->

<!-- ### Run Locally
```bash
# Compile
vlog *.sv
# Simulate
vsim -c tb_top -do "run -all; quit" 
```` -->

## Future Extensions

* Extend support for **burst and wrap** transfers
* Add **bus arbitration** for multi-master topologies
* Include **functional coverage** for all `HTRANS` combinations
* Integrate **UVM register model (RAL)** for memory-mapped DUTs
* Add **assertion-based protocol compliance checks (SVA)**


## Tools & Environment

| Component   | Version                                                           |
| ----------- | ----------------------------------------------------------------- |
| Language    | SystemVerilog (IEEE 1800-2017)                                    |
| Methodology | UVM 1.2                                                           |
| Simulator   | XCelium / EDA Playground                                          |
| Platform    | Linux / Windows                                                   |
| Author      |  RiseEdge                                                         |


## References

* ARM AMBA AHB Protocol Specification
* Accellera UVM 1.2 User Guide
* Doulos Verification Methodology Tutorials
* Verification Academy AMBA Bus Overview


<p align="center">
  <b>© 2025 RiseEdge Verification Catalog</b><br>
</p>

