// js/admin.js

document.addEventListener("DOMContentLoaded", () => {
    
    // --- MOCK DATABASE & UTILITIES ---
    const mockComplaints = [
        { id: "PCMC-8921", date: "Oct 24, 09:15", lang: "Marathi", category: "Severe Water Logging", urgency: "High", status: "Pending" },
        { id: "PCMC-8920", date: "Oct 24, 08:30", lang: "Hindi", category: "Pothole Repair", urgency: "Medium", status: "In-Progress" },
        { id: "PCMC-8915", date: "Oct 23, 16:45", lang: "English", category: "Missed Garbage Collection", urgency: "Low", status: "New" },
        { id: "PCMC-8890", date: "Oct 22, 10:00", lang: "Marathi", category: "Streetlight Malfunction", urgency: "Medium", status: "Resolved" }
    ];

    function getUrgencyBadge(urgency) {
        if (urgency === "High") return `<span class="bg-red-50 text-red-700 px-2 py-1 rounded text-xs font-bold border border-red-100">↑ High</span>`;
        if (urgency === "Medium") return `<span class="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-xs font-bold border border-yellow-100">- Medium</span>`;
        return `<span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-bold border border-slate-200">↓ Low</span>`;
    }

    function getStatusBadge(status) {
        if (status === "Pending" || status === "New") return `<span class="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold border border-orange-200">${status}</span>`;
        if (status === "In-Progress") return `<span class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">${status}</span>`;
        return `<span class="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">✓ ${status}</span>`;
    }


    // --- PAGE 1: ADMIN DASHBOARD LOGIC ---
    const dashboardTable = document.getElementById("tableBody");
    if (dashboardTable) {
        const searchInput = document.getElementById("searchInput");
        const urgencyFilter = document.getElementById("urgencyFilter");

        function renderDashboardTable(data) {
            dashboardTable.innerHTML = ""; 
            if (data.length === 0) {
                dashboardTable.innerHTML = `<tr><td colspan="7" class="px-6 py-8 text-center text-slate-500 italic">No tickets found.</td></tr>`;
                return;
            }
            data.forEach(ticket => {
                dashboardTable.innerHTML += `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-4 font-semibold text-blue-600">${ticket.id}</td>
                        <td class="px-6 py-4 text-slate-600">${ticket.date}</td>
                        <td class="px-6 py-4 text-slate-600">${ticket.lang}</td>
                        <td class="px-6 py-4 font-medium">${ticket.category}</td>
                        <td class="px-6 py-4">${getUrgencyBadge(ticket.urgency)}</td>
                        <td class="px-6 py-4">${getStatusBadge(ticket.status)}</td>
                        <td class="px-6 py-4"><a href="ticket-detail.html" class="text-blue-600 hover:text-blue-800 font-semibold mr-3">View</a></td>
                    </tr>`;
            });
        }

        function filterDashboard() {
            const term = searchInput.value.toLowerCase();
            const urg = urgencyFilter.value;
            renderDashboardTable(mockComplaints.filter(t => 
                (t.id.toLowerCase().includes(term) || t.category.toLowerCase().includes(term)) &&
                (urg === "All" || t.urgency === urg)
            ));
        }

        if (searchInput) searchInput.addEventListener("input", filterDashboard);
        if (urgencyFilter) urgencyFilter.addEventListener("change", filterDashboard);
        renderDashboardTable(mockComplaints);
    }


    // --- PAGE 2: MASTER GRIEVANCES LOGIC ---
    const grievancesTable = document.getElementById("grievancesTableBody");
    if (grievancesTable) {
        const grievanceSearch = document.getElementById("grievanceSearch");
        const grievanceStatusFilter = document.getElementById("grievanceStatusFilter");
        const applyBtn = document.getElementById("applyGrievanceFilters");
        const manualEntryBtn = document.getElementById("manualEntryBtn");

        function renderGrievancesTable(data) {
            grievancesTable.innerHTML = ""; 
            if (data.length === 0) {
                grievancesTable.innerHTML = `<tr><td colspan="5" class="px-6 py-8 text-center text-slate-500 italic">No tickets found.</td></tr>`;
                return;
            }
            data.forEach(ticket => {
                grievancesTable.innerHTML += `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-4 font-semibold text-blue-600">${ticket.id}</td>
                        <td class="px-6 py-4 font-medium">${ticket.category}</td>
                        <td class="px-6 py-4">${getUrgencyBadge(ticket.urgency)}</td>
                        <td class="px-6 py-4">${getStatusBadge(ticket.status)}</td>
                        <td class="px-6 py-4"><a href="ticket-detail.html" class="text-blue-600 hover:text-blue-800 font-semibold mr-3">View</a></td>
                    </tr>`;
            });
        }

        function applyGrievanceFilters() {
            const term = grievanceSearch.value.toLowerCase();
            const stat = grievanceStatusFilter.value;
            renderGrievancesTable(mockComplaints.filter(t => 
                (t.id.toLowerCase().includes(term) || t.category.toLowerCase().includes(term)) &&
                (stat === "All" || t.status === stat)
            ));
        }

        if (grievanceSearch) grievanceSearch.addEventListener("input", applyGrievanceFilters);
        if (grievanceStatusFilter) grievanceStatusFilter.addEventListener("change", applyGrievanceFilters);
        if (applyBtn) applyBtn.addEventListener("click", applyGrievanceFilters);

        if (manualEntryBtn) manualEntryBtn.addEventListener("click", () => alert("📝 Opening Manual Entry Form..."));
        
        renderGrievancesTable(mockComplaints);
    }


    // --- PAGE 3: DEPARTMENTS LOGIC ---
    const viewLoadBtns = document.querySelectorAll(".view-load-btn");
    viewLoadBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const departmentName = e.target.getAttribute("data-dept");
            alert(`📊 Loading live workload metrics and open tickets for:\n${departmentName}`);
        });
    });


    // --- PAGE 4: REPORTS LOGIC ---
    const exportPdfBtn = document.getElementById("exportPdfBtn");
    const exportCsvBtn = document.getElementById("exportCsvBtn");

    if (exportPdfBtn) {
        exportPdfBtn.addEventListener("click", () => alert("📄 Generating PDF Report...\n\nDownloading 'PCMC_Performance_Report.pdf' to your device."));
    }
    if (exportCsvBtn) {
        exportCsvBtn.addEventListener("click", () => alert("📊 Generating CSV Export...\n\nDownloading 'PCMC_Raw_Data.csv' to your device."));
    }


    // --- PAGE 5: TICKET DETAIL LOGIC ---
    const printTicketBtn = document.getElementById("printTicketBtn");
    if (printTicketBtn) {
        printTicketBtn.addEventListener("click", () => {
            window.print(); // Triggers the browser's native print dialog
        });
    }

    const updateStatusBtn = document.getElementById("updateStatusBtn");
    if (updateStatusBtn) {
        updateStatusBtn.addEventListener("click", () => {
            const newStatus = prompt("Update ticket status to (e.g., In-Progress, Resolved):", "In-Progress");
            if (newStatus) {
                alert(`✅ Status successfully updated to: ${newStatus}\nAn automated WhatsApp/SMS has been sent to the citizen.`);
            }
        });
    }

    const dispatchTeamBtn = document.getElementById("dispatchTeamBtn");
    if (dispatchTeamBtn) {
        dispatchTeamBtn.addEventListener("click", () => {
            alert("🚓 Inspection Team dispatched to Sector 14.\nETA: 45 minutes.");
        });
    }

    const issueNoticeBtn = document.getElementById("issueNoticeBtn");
    if (issueNoticeBtn) {
        issueNoticeBtn.addEventListener("click", () => {
            alert("✉️ Official warning notice drafted and sent to the property owner.");
        });
    }

    const escalateBtn = document.getElementById("escalateBtn");
    if (escalateBtn) {
        escalateBtn.addEventListener("click", () => {
            alert("⚠️ Ticket escalated to Zonal Head (Zone A). Priority upgraded to CRITICAL.");
        });
    }

    const changeAssigneeBtn = document.getElementById("changeAssigneeBtn");
    if (changeAssigneeBtn) {
        changeAssigneeBtn.addEventListener("click", () => {
            const newAssignee = prompt("Enter the name of the new field inspector to assign:", "Priya Sharma");
            if (newAssignee) {
                alert(`👤 Ticket reassigned to ${newAssignee}. They have been notified via the internal dashboard.`);
            }
        });
    }


    // --- GLOBAL ACTIONS (Buttons found on multiple pages) ---
    const switchDeptBtn = document.getElementById("switchDeptBtn");
    if (switchDeptBtn) {
        switchDeptBtn.addEventListener("click", () => {
            const dept = prompt("Enter department to switch view (e.g., Water Supply, Electrical):", "Public Works");
            if (dept) alert(`🔄 Switched dashboard view to: ${dept}`);
        });
    }

    const exportBtn = document.getElementById("exportReportBtn");
    if (exportBtn) {
        exportBtn.addEventListener("click", () => alert("✅ Generating Report..."));
    }
});