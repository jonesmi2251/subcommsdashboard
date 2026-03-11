/**
 * SUBWAY® COMMS METRICS DASHBOARD - DATA FILE
 * 
 * This file contains all the data for the dashboard.
 * Update this file with your real data - the dashboard will automatically recalculate everything.
 * 
 * All data arrays must be in chronological order (oldest to newest).
 */

// ========================================
// TRAINING COMPLETION INITIATIVE DATA
// ========================================
const trainingCampaignsData = [
    // 2024 Campaigns
    {
        campaign: 'C1 2024',
        year: 2024,
        period: 'Q1 2024',
        complete100First7: null,
        complete80First7: null,
        complete100ByLaunch: null,
        complete80ByLaunch: null,
        fullRegionByLaunch: null,
        status: 'completed'
    },
    {
        campaign: 'C2 2024',
        year: 2024,
        period: 'Q2 2024',
        complete100First7: null,
        complete80First7: null,
        complete100ByLaunch: null,
        complete80ByLaunch: null,
        fullRegionByLaunch: null,
        status: 'completed'
    },
    {
        campaign: 'C3 2024',
        year: 2024,
        period: 'Q3 2024',
        complete100First7: 127,
        complete80First7: 238,
        complete100ByLaunch: 267,
        complete80ByLaunch: 616,
        fullRegionByLaunch: 55,
        status: 'completed'
    },
    {
        campaign: 'C4 2024',
        year: 2024,
        period: 'Q4 2024',
        complete100First7: 77,
        complete80First7: 173,
        complete100ByLaunch: 401,
        complete80ByLaunch: 818,
        fullRegionByLaunch: 60,
        status: 'completed'
    },
    {
        campaign: 'C5 2024',
        year: 2024,
        period: 'Q4 2024',
        complete100First7: 160,
        complete80First7: 341,
        complete100ByLaunch: 495,
        complete80ByLaunch: 845,
        fullRegionByLaunch: 58,
        status: 'completed'
    },
    // 2025 Campaigns
    {
        campaign: 'C1 2025',
        year: 2025,
        period: 'Q1 2025',
        complete100First7: 105,
        complete80First7: 210,
        complete100ByLaunch: 476,
        complete80ByLaunch: 850,
        fullRegionByLaunch: 61,
        status: 'completed'
    },
    {
        campaign: 'C2 2025',
        year: 2025,
        period: 'Q2 2025',
        complete100First7: 222,
        complete80First7: 325,
        complete100ByLaunch: 656,
        complete80ByLaunch: 572,
        fullRegionByLaunch: 67,
        status: 'completed'
    },
    {
        campaign: 'C3 2025',
        year: 2025,
        period: 'Q3 2025',
        complete100First7: 376,
        complete80First7: 354,
        complete100ByLaunch: 811,
        complete80ByLaunch: 532,
        fullRegionByLaunch: 69,
        status: 'completed'
    },
    {
        campaign: 'C4 2025',
        year: 2025,
        period: 'Q4 2025',
        complete100First7: 216,
        complete80First7: 365,
        complete100ByLaunch: 1136,
        complete80ByLaunch: 1618,
        fullRegionByLaunch: 82,
        status: 'completed'
    },
    {
        campaign: 'C5 2025',
        year: 2025,
        period: 'Q4 2025',
        complete100First7: 333,
        complete80First7: 582,
        complete100ByLaunch: 1012,
        complete80ByLaunch: 1457,
        fullRegionByLaunch: 75,
        status: 'completed'
    },
    // 2026 Campaigns
    {
        campaign: 'C1 2026',
        year: 2026,
        period: 'Q1 2026',
        complete100First7: 479,
        complete80First7: 759,
        complete100ByLaunch: 1350,
        complete80ByLaunch: 1727,
        fullRegionByLaunch: 86.49,
        status: 'completed'
    },
    {
        campaign: 'C2 2026',
        year: 2026,
        period: 'Q2 2026',
        complete100First7: 684,
        complete80First7: 977,
        complete100ByLaunch: null,
        complete80ByLaunch: null,
        fullRegionByLaunch: null,
        status: 'in-progress'
    }
];

// ========================================
// RESTAURANT VISITS INITIATIVE DATA
// ========================================
const restaurantVisitsData = [
    // Pre-Initiative Months
    { month: 'Jan 2024', visits: 45, avgScore: 72.5, highest: 88, lowest: 58 },
    { month: 'Feb 2024', visits: 42, avgScore: 73.2, highest: 89, lowest: 60 },
    { month: 'Mar 2024', visits: 48, avgScore: 74.8, highest: 90, lowest: 62 },
    { month: 'Apr 2024', visits: 50, avgScore: 75.5, highest: 91, lowest: 64 },
    { month: 'May 2024', visits: 52, avgScore: 74.2, highest: 89, lowest: 61 },
    
    // Initiative Launched - June 2024
    { month: 'Jun 2024', visits: 55, avgScore: 76.5, highest: 92, lowest: 65, initiativeLaunch: true },
    { month: 'Jul 2024', visits: 58, avgScore: 78.2, highest: 93, lowest: 68 },
    { month: 'Aug 2024', visits: 60, avgScore: 79.8, highest: 94, lowest: 70 },
    { month: 'Sep 2024', visits: 62, avgScore: 81.5, highest: 95, lowest: 72 },
    { month: 'Oct 2024', visits: 65, avgScore: 83.2, highest: 96, lowest: 74 },
    { month: 'Nov 2024', visits: 63, avgScore: 84.5, highest: 97, lowest: 76 },
    { month: 'Dec 2024', visits: 60, avgScore: 85.8, highest: 97, lowest: 78 },
    { month: 'Jan 2025', visits: 68, avgScore: 86.5, highest: 98, lowest: 79 },
    { month: 'Feb 2025', visits: 70, avgScore: 87.2, highest: 98, lowest: 80 },
    { month: 'Mar 2025', visits: 72, avgScore: 88.5, highest: 99, lowest: 82 }
];

// ========================================
// WEEKLY WRAP NEWSLETTER DATA
// ========================================
const weeklyWrapData = [
    // 2024 Data (Last Year)
    // Q1 2024
    { week: 'Week 1', date: 'Jan 1, 2024', year: 2024, quarter: 'Q1', month: 'Jan', openRate: 35.2, recipients: 850 },
    { week: 'Week 2', date: 'Jan 8, 2024', year: 2024, quarter: 'Q1', month: 'Jan', openRate: 36.5, recipients: 855 },
    { week: 'Week 3', date: 'Jan 15, 2024', year: 2024, quarter: 'Q1', month: 'Jan', openRate: 37.8, recipients: 860 },
    { week: 'Week 4', date: 'Jan 22, 2024', year: 2024, quarter: 'Q1', month: 'Jan', openRate: 38.2, recipients: 865 },
    { week: 'Week 5', date: 'Jan 29, 2024', year: 2024, quarter: 'Q1', month: 'Jan', openRate: 39.1, recipients: 870 },
    { week: 'Week 6', date: 'Feb 5, 2024', year: 2024, quarter: 'Q1', month: 'Feb', openRate: 37.5, recipients: 875 },
    { week: 'Week 7', date: 'Feb 12, 2024', year: 2024, quarter: 'Q1', month: 'Feb', openRate: 38.8, recipients: 880 },
    { week: 'Week 8', date: 'Feb 19, 2024', year: 2024, quarter: 'Q1', month: 'Feb', openRate: 39.5, recipients: 885 },
    { week: 'Week 9', date: 'Feb 26, 2024', year: 2024, quarter: 'Q1', month: 'Feb', openRate: 40.2, recipients: 890 },
    { week: 'Week 10', date: 'Mar 4, 2024', year: 2024, quarter: 'Q1', month: 'Mar', openRate: 41.0, recipients: 895 },
    { week: 'Week 11', date: 'Mar 11, 2024', year: 2024, quarter: 'Q1', month: 'Mar', openRate: 41.8, recipients: 900 },
    { week: 'Week 12', date: 'Mar 18, 2024', year: 2024, quarter: 'Q1', month: 'Mar', openRate: 42.5, recipients: 905 },
    { week: 'Week 13', date: 'Mar 25, 2024', year: 2024, quarter: 'Q1', month: 'Mar', openRate: 43.2, recipients: 910 },
    
    // Q2 2024
    { week: 'Week 14', date: 'Apr 1, 2024', year: 2024, quarter: 'Q2', month: 'Apr', openRate: 42.8, recipients: 915 },
    { week: 'Week 15', date: 'Apr 8, 2024', year: 2024, quarter: 'Q2', month: 'Apr', openRate: 43.5, recipients: 920 },
    { week: 'Week 16', date: 'Apr 15, 2024', year: 2024, quarter: 'Q2', month: 'Apr', openRate: 44.2, recipients: 925 },
    { week: 'Week 17', date: 'Apr 22, 2024', year: 2024, quarter: 'Q2', month: 'Apr', openRate: 44.8, recipients: 930 },
    { week: 'Week 18', date: 'Apr 29, 2024', year: 2024, quarter: 'Q2', month: 'Apr', openRate: 45.5, recipients: 935 },
    { week: 'Week 19', date: 'May 6, 2024', year: 2024, quarter: 'Q2', month: 'May', openRate: 45.0, recipients: 940 },
    { week: 'Week 20', date: 'May 13, 2024', year: 2024, quarter: 'Q2', month: 'May', openRate: 46.2, recipients: 945 },
    { week: 'Week 21', date: 'May 20, 2024', year: 2024, quarter: 'Q2', month: 'May', openRate: 46.8, recipients: 950 },
    { week: 'Week 22', date: 'May 27, 2024', year: 2024, quarter: 'Q2', month: 'May', openRate: 47.5, recipients: 955 },
    { week: 'Week 23', date: 'Jun 3, 2024', year: 2024, quarter: 'Q2', month: 'Jun', openRate: 48.2, recipients: 960 },
    { week: 'Week 24', date: 'Jun 10, 2024', year: 2024, quarter: 'Q2', month: 'Jun', openRate: 48.8, recipients: 965 },
    { week: 'Week 25', date: 'Jun 17, 2024', year: 2024, quarter: 'Q2', month: 'Jun', openRate: 49.5, recipients: 970 },
    { week: 'Week 26', date: 'Jun 24, 2024', year: 2024, quarter: 'Q2', month: 'Jun', openRate: 50.2, recipients: 975 },
    
    // Q3 2024
    { week: 'Week 27', date: 'Jul 1, 2024', year: 2024, quarter: 'Q3', month: 'Jul', openRate: 49.8, recipients: 980 },
    { week: 'Week 28', date: 'Jul 8, 2024', year: 2024, quarter: 'Q3', month: 'Jul', openRate: 50.5, recipients: 985 },
    { week: 'Week 29', date: 'Jul 15, 2024', year: 2024, quarter: 'Q3', month: 'Jul', openRate: 51.2, recipients: 990 },
    { week: 'Week 30', date: 'Jul 22, 2024', year: 2024, quarter: 'Q3', month: 'Jul', openRate: 51.8, recipients: 995 },
    { week: 'Week 31', date: 'Jul 29, 2024', year: 2024, quarter: 'Q3', month: 'Jul', openRate: 52.5, recipients: 1000 },
    { week: 'Week 32', date: 'Aug 5, 2024', year: 2024, quarter: 'Q3', month: 'Aug', openRate: 51.5, recipients: 1005 },
    { week: 'Week 33', date: 'Aug 12, 2024', year: 2024, quarter: 'Q3', month: 'Aug', openRate: 52.8, recipients: 1010 },
    { week: 'Week 34', date: 'Aug 19, 2024', year: 2024, quarter: 'Q3', month: 'Aug', openRate: 53.5, recipients: 1015 },
    { week: 'Week 35', date: 'Aug 26, 2024', year: 2024, quarter: 'Q3', month: 'Aug', openRate: 54.2, recipients: 1020 },
    { week: 'Week 36', date: 'Sep 2, 2024', year: 2024, quarter: 'Q3', month: 'Sep', openRate: 54.8, recipients: 1025 },
    { week: 'Week 37', date: 'Sep 9, 2024', year: 2024, quarter: 'Q3', month: 'Sep', openRate: 55.5, recipients: 1030 },
    { week: 'Week 38', date: 'Sep 16, 2024', year: 2024, quarter: 'Q3', month: 'Sep', openRate: 56.2, recipients: 1035 },
    { week: 'Week 39', date: 'Sep 23, 2024', year: 2024, quarter: 'Q3', month: 'Sep', openRate: 56.8, recipients: 1040 },
    { week: 'Week 40', date: 'Sep 30, 2024', year: 2024, quarter: 'Q3', month: 'Sep', openRate: 57.5, recipients: 1045 },
    
    // Q4 2024
    { week: 'Week 41', date: 'Oct 7, 2024', year: 2024, quarter: 'Q4', month: 'Oct', openRate: 57.2, recipients: 1050 },
    { week: 'Week 42', date: 'Oct 14, 2024', year: 2024, quarter: 'Q4', month: 'Oct', openRate: 58.0, recipients: 1055 },
    { week: 'Week 43', date: 'Oct 21, 2024', year: 2024, quarter: 'Q4', month: 'Oct', openRate: 58.8, recipients: 1060 },
    { week: 'Week 44', date: 'Oct 28, 2024', year: 2024, quarter: 'Q4', month: 'Oct', openRate: 59.5, recipients: 1065 },
    { week: 'Week 45', date: 'Nov 4, 2024', year: 2024, quarter: 'Q4', month: 'Nov', openRate: 59.2, recipients: 1070 },
    { week: 'Week 46', date: 'Nov 11, 2024', year: 2024, quarter: 'Q4', month: 'Nov', openRate: 60.0, recipients: 1075 },
    { week: 'Week 47', date: 'Nov 18, 2024', year: 2024, quarter: 'Q4', month: 'Nov', openRate: 60.8, recipients: 1080 },
    { week: 'Week 48', date: 'Nov 25, 2024', year: 2024, quarter: 'Q4', month: 'Nov', openRate: 61.5, recipients: 1085 },
    { week: 'Week 49', date: 'Dec 2, 2024', year: 2024, quarter: 'Q4', month: 'Dec', openRate: 60.5, recipients: 1090 },
    { week: 'Week 50', date: 'Dec 9, 2024', year: 2024, quarter: 'Q4', month: 'Dec', openRate: 61.2, recipients: 1095 },
    { week: 'Week 51', date: 'Dec 16, 2024', year: 2024, quarter: 'Q4', month: 'Dec', openRate: 62.0, recipients: 1100 },
    { week: 'Week 52', date: 'Dec 23, 2024', year: 2024, quarter: 'Q4', month: 'Dec', openRate: 62.8, recipients: 1105 },
    
    // 2025 Data (This Year)
    // Q1 2025
    { week: 'Week 1', date: 'Jan 6, 2025', year: 2025, quarter: 'Q1', month: 'Jan', openRate: 63.5, recipients: 1110 },
    { week: 'Week 2', date: 'Jan 13, 2025', year: 2025, quarter: 'Q1', month: 'Jan', openRate: 64.2, recipients: 1115 },
    { week: 'Week 3', date: 'Jan 20, 2025', year: 2025, quarter: 'Q1', month: 'Jan', openRate: 64.8, recipients: 1120 },
    { week: 'Week 4', date: 'Jan 27, 2025', year: 2025, quarter: 'Q1', month: 'Jan', openRate: 65.5, recipients: 1125 },
    { week: 'Week 5', date: 'Feb 3, 2025', year: 2025, quarter: 'Q1', month: 'Feb', openRate: 65.2, recipients: 1130 },
    { week: 'Week 6', date: 'Feb 10, 2025', year: 2025, quarter: 'Q1', month: 'Feb', openRate: 66.0, recipients: 1135 },
    { week: 'Week 7', date: 'Feb 17, 2025', year: 2025, quarter: 'Q1', month: 'Feb', openRate: 66.8, recipients: 1140 },
    { week: 'Week 8', date: 'Feb 24, 2025', year: 2025, quarter: 'Q1', month: 'Feb', openRate: 67.5, recipients: 1145 },
    { week: 'Week 9', date: 'Mar 3, 2025', year: 2025, quarter: 'Q1', month: 'Mar', openRate: 68.2, recipients: 1150 },
    { week: 'Week 10', date: 'Mar 10, 2025', year: 2025, quarter: 'Q1', month: 'Mar', openRate: 68.8, recipients: 1155 }
];

// ========================================
// SMO CONNECT NEWSLETTER DATA
// ========================================
const smoConnectData = [
    // 2024 Data (Last Year)
    { month: 'Jan 2024', year: 2024, quarter: 'Q1', openRate: 42.5, recipients: 920 },
    { month: 'Feb 2024', year: 2024, quarter: 'Q1', openRate: 43.8, recipients: 925 },
    { month: 'Mar 2024', year: 2024, quarter: 'Q1', openRate: 45.2, recipients: 930 },
    { month: 'Apr 2024', year: 2024, quarter: 'Q2', openRate: 46.5, recipients: 935 },
    { month: 'May 2024', year: 2024, quarter: 'Q2', openRate: 47.8, recipients: 940 },
    { month: 'Jun 2024', year: 2024, quarter: 'Q2', openRate: 49.2, recipients: 945 },
    { month: 'Jul 2024', year: 2024, quarter: 'Q3', openRate: 50.5, recipients: 950 },
    { month: 'Aug 2024', year: 2024, quarter: 'Q3', openRate: 51.8, recipients: 955 },
    { month: 'Sep 2024', year: 2024, quarter: 'Q3', openRate: 53.2, recipients: 960 },
    { month: 'Oct 2024', year: 2024, quarter: 'Q4', openRate: 54.5, recipients: 965 },
    { month: 'Nov 2024', year: 2024, quarter: 'Q4', openRate: 55.8, recipients: 970 },
    { month: 'Dec 2024', year: 2024, quarter: 'Q4', openRate: 57.2, recipients: 975 },
    
    // 2025 Data (This Year)
    { month: 'Jan 2025', year: 2025, quarter: 'Q1', openRate: 58.5, recipients: 980 },
    { month: 'Feb 2025', year: 2025, quarter: 'Q1', openRate: 59.8, recipients: 985 },
    { month: 'Mar 2025', year: 2025, quarter: 'Q1', openRate: 61.2, recipients: 990 }
];
