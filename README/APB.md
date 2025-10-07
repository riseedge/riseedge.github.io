<!-- PROJECT BANNER -->
<p align="center">
  <img src="../assets/logo.png" alt="RiseEdge Logo" width="250"/>
</p>

<h2 align="center">APB Protocol Verification Environment (SystemVerilog UVM)</h2>

<p align="center">
  <!-- <a href="https://www.edaplayground.com/x/2QzY"><b> Run on EDA Playground</b></a><br> -->
  <img src="https://img.shields.io/badge/Language-SystemVerilog-blue.svg"/>
  <img src="https://img.shields.io/badge/Methodology-UVM%201.2-green.svg"/>
  <img src="https://img.shields.io/badge/Simulator-Questa%2FEDAPlayground-orange.svg"/>
</p>


## Project Overview

This repository implements a **UVM-based verification environment** for the **AMBA APB (Advanced Peripheral Bus)** protocol.  
The testbench verifies **read/write transfers**, **PSEL/PENABLE handshakes**, and **PREADY/PWRITE timing correctness** between an APB master and peripheral DUT.

This project is part of the **RiseEdge UVM Verification Catalog**, which develops reusable and configurable UVM environments for standard SoC buses — including **SPI**, **JTAG**, **APB**, **AHB**, and **AXI**.



## APB Protocol Summary

**APB (Advanced Peripheral Bus)** is part of the AMBA family from ARM.  
It provides a **simple, low-power, non-pipelined interface** for connecting peripheral devices (GPIO, UART, timers, etc.) in SoCs.

| Feature | Description |
|----------|--------------|
| Simplicity | Single clock, low complexity, non-pipelined |
| Handshake | PSEL + PENABLE control the transfer phase |
| Direction | Controlled by PWRITE (1 = write, 0 = read) |
| Response | PREADY and PSLVERR indicate completion and errors |
| Low Power | Only toggles during active transfers |



## Example UVM Log

```

# KERNEL: --- UVM Report Summary ---
# KERNEL: 
# KERNEL: ** Report counts by severity
# KERNEL: UVM_INFO :  484
# KERNEL: UVM_WARNING :    0
# KERNEL: UVM_ERROR :    0
# KERNEL: UVM_FATAL :    0
# KERNEL: ** Report counts by id
# KERNEL: []   160
# KERNEL: [APB_AGENT]     1
# KERNEL: [APB_DRIVER ]    80
# KERNEL: [APB_MONITOR]    80
# KERNEL: [APB_SCOREBOARD]    80
# KERNEL: [APB_SUBSCRIBER]    80
# KERNEL: [RNTST]     1
# KERNEL: [TEST_DONE]     1
# KERNEL: [UVM/RELNOTES]     1
# KERNEL: 
# RUNTIME: Info: RUNTIME_0068 uvm_root.svh (521): $finish called.
# KERNEL: Time: 6490 ns,  Iteration: 56,  Instance: /test,  Process: @INITIAL#50_3@.
# KERNEL: stopped at time: 6490 ns
# VSIM: Simulation has finished. There are no more test vectors to simulate.
acdb save;
acdb report -db fcover.acdb -txt -o cov.txt;
exit
# VSIM: Simulation has finished.

````

## How to Run

<!-- ### Run Online
**EDA Playground Link:** [https://www.edaplayground.com/x/2QzY](https://www.edaplayground.com/x/2QzY)

1. Open the link  
2. Choose **SystemVerilog + UVM 1.2**  
3. Click **Run**  
4. View the simulation transcript and waveform -->

### Run Locally
```bash
# Compile
vlog *.sv
# Simulate
vsim -c tb_top -do "run -all; quit"
````


## Future Extensions

* Add **functional coverage and assertions** for timing violations
* Extend to **multi-slave configuration** with address decoding
* Add **error injection tests** for PSLVERR verification
* Integrate **UVM RAL (Register Abstraction Layer)** for register-based DUTs
* Build **common APB–AHB–AXI cross-protocol testbench**


## Tools & Environment

| Component   | Version                                                           |
| ----------- | ----------------------------------------------------------------- |
| Language    | SystemVerilog (IEEE 1800-2017)                                    |
| Methodology | UVM 1.2                                                           |
| Simulator   | VCS / EDA Playground                                              |
| Platform    | Linux / Windows                                                   |
| Author      |  RiseEdge                                                         |


## References

* ARM AMBA APB Protocol Specification
* Accellera UVM 1.2 User Guide
* Doulos UVM & Bus Verification Tutorials
* Verification Academy AMBA APB Protocol Reference


<p align="center">
  <b>© 2025 RiseEdge Verification Catalog</b><br>
</p>
