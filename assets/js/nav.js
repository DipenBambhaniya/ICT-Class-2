/* ==========================================================================
   Left sidebar navigation — injected on every page.
   Groups follow the ICT Class-2 syllabus unit numbers.
   ========================================================================== */

(function () {
  "use strict";

  document.documentElement.classList.add("has-sidenav");

  var inTopics = /\/topics\//.test(location.pathname);
  var inPapers = /\/papers\//.test(location.pathname);
  var base = (inTopics || inPapers) ? "../" : "";

  var current = location.pathname.split("/").pop() || "index.html";
  var currentFull = (inTopics ? "topics/" : inPapers ? "papers/" : "") + current;

  var MENU = [
    { type: "link", label: "Home", href: "index.html" },
    { type: "link", label: "Practice Quiz", href: "quiz.html" },
    {
      type: "group", label: "Previous Year Papers", href: "papers.html",
      items: [
        ["Overview", "papers.html"],
        ["ICT Officer Class-2 (2025)", "papers/gpsc-110-ict-officer-2025.html"],
        ["Assistant Director (IT) (2025)", "papers/gpsc-108-assistant-director-2025.html"],
        ["Deputy Director (IT) (2025)", "papers/gpsc-109-deputy-director-2025.html"]
      ]
    },
    {
      type: "group", label: "1) Programming & Data Structures", href: "pds.html",
      items: [
        ["Overview", "pds.html"],
        ["Programming in C", "topics/pds-c-programming.html"],
        ["Recursion", "topics/pds-recursion.html"],
        ["Arrays", "topics/pds-arrays.html"],
        ["Stacks", "topics/pds-stacks.html"],
        ["Queues", "topics/pds-queues.html"],
        ["Linked Lists", "topics/pds-linked-lists.html"],
        ["Trees", "topics/pds-trees.html"],
        ["Binary Search Trees", "topics/pds-bst.html"],
        ["Binary Heaps", "topics/pds-heaps.html"],
        ["Graphs", "topics/pds-graphs.html"]
      ]
    },
    {
      type: "group", label: "2) Discrete Mathematics", href: "dm.html",
      items: [
        ["Overview", "dm.html"],
        ["Logic (Propositional & FOL)", "topics/dm-logic.html"],
        ["Sets, Relations, Functions", "topics/dm-sets.html"],
        ["Partial Orders & Lattices", "topics/dm-lattices.html"],
        ["Groups", "topics/dm-groups.html"],
        ["Graph Theory", "topics/dm-graphs.html"],
        ["Combinatorics", "topics/dm-combinatorics.html"]
      ]
    },
    {
      type: "group", label: "3) Algorithms", href: "algo.html",
      items: [
        ["Overview", "algo.html"],
        ["Algorithm Analysis", "topics/algo-analysis.html"],
        ["Asymptotic Notation", "topics/algo-asymptotic.html"],
        ["Space & Time Complexity", "topics/algo-complexity.html"],
        ["Worst / Average Analysis", "topics/algo-case-analysis.html"],
        ["Divide & Conquer", "topics/algo-divide-conquer.html"],
        ["Tree & Graph Traversals", "topics/algo-traversals.html"],
        ["Searching", "topics/algo-searching.html"],
        ["Sorting & Hashing", "topics/algo-sorting-hashing.html"],
        ["Greedy Algorithms", "topics/algo-greedy.html"],
        ["Dynamic Programming", "topics/algo-dp.html"],
        ["Graph Search", "topics/algo-graph-search.html"],
        ["Minimum Spanning Trees", "topics/algo-mst.html"],
        ["Shortest Paths", "topics/algo-shortest-paths.html"]
      ]
    },
    {
      type: "group", label: "4) Databases", href: "dbms.html",
      items: [
        ["Overview", "dbms.html"],
        ["Integrity Constraints", "topics/integrity-constraints.html"],
        ["Normal Forms", "topics/normal-forms.html"],
        ["File Organization", "topics/file-organization.html"],
        ["Indexes", "topics/indexes.html"],
        ["B and B+ Trees", "topics/b-trees.html"],
        ["Transaction Processing", "topics/transaction-processing.html"],
        ["Types of Schedules", "topics/schedules.html"],
        ["Concurrency Control", "topics/concurrency-control.html"]
      ]
    },
    {
      type: "group", label: "5) Hardware & Operating Systems", href: "os.html",
      items: [
        ["Overview", "os.html"],
        ["Hardware Basics", "topics/os-hardware.html"],
        ["Processes", "topics/os-processes.html"],
        ["Threads", "topics/os-threads.html"],
        ["Inter-process Communication", "topics/os-ipc.html"],
        ["Concurrency & Synchronization", "topics/os-sync.html"],
        ["Deadlock", "topics/os-deadlock.html"],
        ["CPU Scheduling", "topics/os-scheduling.html"],
        ["Memory & Virtual Memory", "topics/os-memory.html"],
        ["File Systems", "topics/os-filesystems.html"]
      ]
    },
    {
      type: "group", label: "6) Computer Networks", href: "cn.html",
      items: [
        ["Overview", "cn.html"],
        ["Concept of Layering", "topics/cn-layering.html"],
        ["LAN Technologies (Ethernet)", "topics/cn-ethernet.html"],
        ["Flow & Error Control", "topics/cn-flow-error.html"],
        ["Switching", "topics/cn-switching.html"],
        ["IPv4 / IPv6 & Routers", "topics/cn-ip.html"],
        ["Routing Algorithms", "topics/cn-routing.html"],
        ["TCP/UDP, Sockets & Congestion Control", "topics/cn-transport.html"],
        ["Application Layer Protocols", "topics/cn-app-layer.html"],
        ["Basics of Wi-Fi", "topics/cn-wifi.html"],
        ["Network Security", "topics/cn-security.html"]
      ]
    },
    {
      type: "group", label: "7) Analytics", href: "analytics.html",
      items: [
        ["Overview", "analytics.html"],
        ["Descriptive & Predictive Analytics", "topics/an-desc-pred.html"],
        ["OLAP", "topics/an-olap.html"],
        ["OLTP vs OLAP", "topics/an-oltp-olap.html"],
        ["Data Cubes", "topics/an-data-cubes.html"],
        ["Data Warehousing", "topics/an-warehousing.html"],
        ["Star / Snowflake / Fact Constellation", "topics/an-schemas.html"],
        ["Data Mining Techniques", "topics/an-data-mining.html"],
        ["In-Database Analytics", "topics/an-in-db.html"],
        ["Advanced SQL", "topics/an-adv-sql.html"]
      ]
    },
    {
      type: "group", label: "8) NoSQL Databases",
      items: [
        ["SQL vs NoSQL", "topics/sql-vs-nosql.html"],
        ["Data Types & Representation", "topics/data-representation.html"],
        ["CAP Theorem", "topics/cap-theorem.html"],
        ["Properties of NoSQL", "topics/properties.html"]
      ]
    },
    {
      type: "group", label: "9) Data Centre", href: "dc.html",
      items: [
        ["Overview", "dc.html"],
        ["Data Storage & Availability", "topics/dc-storage.html"],
        ["Cloud Infrastructure & Virtualization", "topics/dc-cloud-infra.html"],
        ["Public / Private / Hybrid Cloud", "topics/dc-cloud-models.html"],
        ["Scalability & Reliability", "topics/dc-scalability.html"]
      ]
    },
    {
      type: "group", label: "10) Mobile Application", href: "mobile.html",
      items: [
        ["Overview", "mobile.html"],
        ["Platforms & Devices", "topics/mobile-platforms.html"],
        ["Cellular Technologies", "topics/mobile-cellular.html"],
        ["Mobile App Development", "topics/mobile-appdev.html"],
        ["Mobile UI Design", "topics/mobile-ui.html"]
      ]
    },
    {
      type: "group", label: "11) Software Engineering", href: "se.html",
      items: [
        ["Overview", "se.html"],
        ["Principles & SDLC", "topics/se-principles.html"],
        ["Agile Software Development", "topics/se-agile.html"],
        ["Software Testing & Project Mgmt", "topics/se-testing-pm.html"],
        ["SCADA & Software Quality", "topics/se-quality-scada.html"]
      ]
    },
    {
      type: "group", label: "12) Cyber Security", href: "cyber.html",
      items: [
        ["Overview", "cyber.html"],
        ["Threats, Attacks & Ethical Hacking", "topics/cy-threats.html"],
        ["Data Security, Privacy & Protection", "topics/cy-data-protection.html"],
        ["IT Security & Risk Management", "topics/cy-risk-mgmt.html"],
        ["Cyber Laws & Governance", "topics/cy-laws.html"]
      ]
    },
    {
      type: "group", label: "13) E-Governance", href: "egov.html",
      items: [
        ["Overview", "egov.html"],
        ["Models & Digital India", "topics/eg-models.html"],
        ["Enterprise, EDI/ERP & IT Gov.", "topics/eg-enterprise.html"],
        ["Smart Villages, Cities & Empowerment", "topics/eg-smart.html"],
        ["Digital Services, Payments & Ethics", "topics/eg-services.html"]
      ]
    },
    {
      type: "group", label: "14) General Awareness of IT Projects", href: "itproj.html",
      items: [
        ["Overview", "itproj.html"],
        ["Mission Mode Projects & Digital Platforms", "topics/itp-mmp.html"],
        ["E-Governance Policies & Gujarat IT/ITeS 2022-27", "topics/itp-policy.html"],
        ["IT Organizations & Gujarat STI Policy", "topics/itp-orgs.html"],
        ["Legislative Framework for IT in India", "topics/itp-legal.html"]
      ]
    },
    {
      type: "group", label: "15) Current Trends & Recent Advancement in IT", href: "trends.html",
      items: [
        ["Overview", "trends.html"],
        ["AI, ML & Generative AI", "topics/trend-ai.html"],
        ["Blockchain, Web3 & DLT", "topics/trend-blockchain.html"],
        ["IoT, Big Data & Cloud-Native", "topics/trend-iot-cloud.html"],
        ["5G/6G, Quantum & AR/VR", "topics/trend-emerging.html"]
      ]
    }
  ];

  function link(label, hrefFull) {
    var a = document.createElement("a");
    a.textContent = label;
    a.href = base + hrefFull;
    if (hrefFull === currentFull) a.className = "current";
    return a;
  }

  function build() {
    var aside = document.createElement("aside");
    aside.className = "sidenav";

    var brand = document.createElement("a");
    brand.className = "sn-brand";
    brand.href = base + "index.html";
    brand.innerHTML = '<span class="logo-dot">DB</span> Exam Prep';
    aside.appendChild(brand);

    MENU.forEach(function (entry) {
      if (entry.type === "link") {
        var a = link(entry.label, entry.href);
        a.className = (a.className ? a.className + " " : "") + "sn-top";
        aside.appendChild(a);
        return;
      }
      var groupHasCurrent = entry.items.some(function (it) { return it[1] === currentFull; });
      var d = document.createElement("details");
      d.className = "sn-group";
      d.open = groupHasCurrent || true;
      var s = document.createElement("summary");
      s.className = "sn-head";
      s.textContent = entry.label;
      d.appendChild(s);
      entry.items.forEach(function (it) { d.appendChild(link(it[0], it[1])); });
      aside.appendChild(d);
    });

    var backdrop = document.createElement("div");
    backdrop.className = "sn-backdrop";
    backdrop.addEventListener("click", close);

    document.body.appendChild(aside);
    document.body.appendChild(backdrop);

    var burger = document.createElement("button");
    burger.className = "sn-hamburger";
    burger.setAttribute("aria-label", "Toggle navigation");
    burger.innerHTML = "&#9776;";
    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      document.documentElement.classList.toggle("sidenav-open");
    });
    var navWrap = document.querySelector(".site-header .nav-wrap");
    if (navWrap) navWrap.insertBefore(burger, navWrap.firstChild);
  }

  function close() {
    document.documentElement.classList.remove("sidenav-open");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
