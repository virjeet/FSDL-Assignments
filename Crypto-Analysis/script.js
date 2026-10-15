// Global chart instances
        let charts = {
            followers: null,
            platform: null,
            contentType: null,
            engagement: null,
            postPerformance: null,
            timing: null
        };

        // Generate realistic social media data
        function generateSocialMediaData(platform, days) {
            const data = [];
            const today = new Date();
            const baseMetrics = {
                'all': { followers: 50000, engagementRate: 3.5 },
                'facebook': { followers: 15000, engagementRate: 2.8 },
                'instagram': { followers: 20000, engagementRate: 4.5 },
                'twitter': { followers: 8000, engagementRate: 2.2 },
                'linkedin': { followers: 5000, engagementRate: 3.0 },
                'youtube': { followers: 2000, engagementRate: 5.0 }
            };

            const base = baseMetrics[platform] || baseMetrics['all'];
            let currentFollowers = base.followers;

            for (let i = days - 1; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);

                const dailyGrowth = Math.floor(Math.random() * 100 + 20);
                currentFollowers += dailyGrowth;

                const posts = Math.floor(Math.random() * 5 + 1);
                const likes = Math.floor(currentFollowers * base.engagementRate / 100 * (0.5 + Math.random()));
                const comments = Math.floor(likes * 0.15 * (0.5 + Math.random()));
                const shares = Math.floor(likes * 0.08 * (0.5 + Math.random()));
                const reach = Math.floor(currentFollowers * (1.2 + Math.random() * 0.8));

                data.push({
                    date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                    followers: currentFollowers,
                    posts: posts,
                    likes: likes,
                    comments: comments,
                    shares: shares,
                    reach: reach,
                    engagement: likes + comments + shares
                });
            }

            return data;
        }

        // Format number with K, M suffix
        function formatNumber(num) {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1) + 'M';
            } else if (num >= 1000) {
                return (num / 1000).toFixed(1) + 'K';
            }
            return num.toString();
        }

        // Update statistics
        function updateStats(data) {
            const totalFollowers = data[data.length - 1].followers;
            const prevFollowers = data[0].followers;
            const followersGrowth = ((totalFollowers - prevFollowers) / prevFollowers * 100).toFixed(1);
            const totalEngagement = data.reduce((sum, d) => sum + d.engagement, 0);
            const totalPosts = data.reduce((sum, d) => sum + d.posts, 0);
            const totalReach = data.reduce((sum, d) => sum + d.reach, 0);
            const totalComments = data.reduce((sum, d) => sum + d.comments, 0);
            const avgEngagementRate = (totalEngagement / totalFollowers * 100 / data.length).toFixed(2);

            document.getElementById('totalFollowers').textContent = formatNumber(totalFollowers);
            document.getElementById('followersChange').textContent = `+${followersGrowth}% this period`;

            document.getElementById('totalEngagement').textContent = formatNumber(totalEngagement);
            document.getElementById('engagementChange').textContent = `+${(Math.random() * 10 + 5).toFixed(1)}% vs last period`;

            document.getElementById('totalPosts').textContent = totalPosts;
            document.getElementById('postsChange').textContent = `${(totalPosts / data.length).toFixed(1)} per day`;

            document.getElementById('avgEngagementRate').textContent = avgEngagementRate + '%';
            document.getElementById('engagementRateChange').textContent = `+${(Math.random() * 2).toFixed(2)}% vs last period`;

            document.getElementById('totalReach').textContent = formatNumber(totalReach);
            document.getElementById('reachChange').textContent = `+${(Math.random() * 15 + 10).toFixed(1)}% vs last period`;

            document.getElementById('totalComments').textContent = formatNumber(totalComments);
            document.getElementById('commentsChange').textContent = `+${(Math.random() * 20 + 5).toFixed(1)}% vs last period`;
        }

        // Create/update followers chart
        function updateFollowersChart(data) {
            const ctx = document.getElementById('followersChart').getContext('2d');

            if (charts.followers) {
                charts.followers.destroy();
            }

            charts.followers = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(d => d.date),
                    datasets: [{
                        label: 'Followers',
                        data: data.map(d => d.followers),
                        borderColor: '#667eea',
                        backgroundColor: 'rgba(102, 126, 234, 0.1)',
                        tension: 0.4,
                        fill: true,
                        pointRadius: 3,
                        pointHoverRadius: 6,
                        borderWidth: 3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: true
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            ticks: {
                                callback: function(value) {
                                    return formatNumber(value);
                                }
                            }
                        }
                    }
                }
            });
        }

        // Create/update platform chart
        function updatePlatformChart() {
            const ctx = document.getElementById('platformChart').getContext('2d');

            if (charts.platform) {
                charts.platform.destroy();
            }

            const platformData = {
                'Facebook': Math.floor(Math.random() * 5000 + 10000),
                'Instagram': Math.floor(Math.random() * 8000 + 15000),
                'Twitter': Math.floor(Math.random() * 3000 + 5000),
                'LinkedIn': Math.floor(Math.random() * 2000 + 3000),
                'YouTube': Math.floor(Math.random() * 1500 + 2000)
            };

            charts.platform = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(platformData),
                    datasets: [{
                        data: Object.values(platformData),
                        backgroundColor: [
                            '#1877f2',
                            '#e4405f',
                            '#1da1f2',
                            '#0077b5',
                            '#ff0000'
                        ],
                        borderWidth: 2,
                        borderColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        }

        // Create/update content type chart
        function updateContentTypeChart() {
            const ctx = document.getElementById('contentTypeChart').getContext('2d');

            if (charts.contentType) {
                charts.contentType.destroy();
            }

            charts.contentType = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Images', 'Videos', 'Text', 'Stories', 'Reels'],
                    datasets: [{
                        label: 'Engagement',
                        data: [
                            Math.floor(Math.random() * 3000 + 5000),
                            Math.floor(Math.random() * 5000 + 8000),
                            Math.floor(Math.random() * 2000 + 3000),
                            Math.floor(Math.random() * 4000 + 6000),
                            Math.floor(Math.random() * 6000 + 9000)
                        ],
                        backgroundColor: [
                            '#ff6384',
                            '#36a2eb',
                            '#ffce56',
                            '#4bc0c0',
                            '#9966ff'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: (value)=> {
                                    return formatNumber(value);
                                }
                            }
                        }
                    }
                }
            });
        }

        // Create/update engagement chart
        function updateEngagementChart(data) {
            const ctx = document.getElementById('engagementChart').getContext('2d');

            if (charts.engagement) {
                charts.engagement.destroy();
            }

            charts.engagement = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(d => d.date),
                    datasets: [
                        {
                            label: 'Likes',
                            data: data.map(d => d.likes),
                            borderColor: '#ff6384',
                            backgroundColor: 'rgba(255, 99, 132, 0.1)',
                            tension: 0.4,
                            fill: true,
                            pointRadius: 2
                        },
                        {
                            label: 'Comments',
                            data: data.map(d => d.comments),
                            borderColor: '#36a2eb',
                            backgroundColor: 'rgba(54, 162, 235, 0.1)',
                            tension: 0.4,
                            fill: true,
                            pointRadius: 2
                        },
                        {
                            label: 'Shares',
                            data: data.map(d => d.shares),
                            borderColor: '#4bc0c0',
                            backgroundColor: 'rgba(75, 192, 192, 0.1)',
                            tension: 0.4,
                            fill: true,
                            pointRadius: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: true
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            stacked: false
                        }
                    }
                }
            });
        }

        // Create/update post performance chart
        function updatePostPerformanceChart(data) {
            const ctx = document.getElementById('postPerformanceChart').getContext('2d');

            if (charts.postPerformance) {
                charts.postPerformance.destroy();
            }

            const scatterData = data.map(d => ({
                x: d.posts,
                y: d.engagement / d.posts,
                r: d.reach / 5000
            }));

            charts.postPerformance = new Chart(ctx, {
                type: 'bubble',
                data: {
                    datasets: [{
                        label: 'Posts vs Engagement (bubble size = reach)',
                        data: scatterData,
                        backgroundColor: 'rgba(153, 102, 255, 0.6)',
                        borderColor: '#9966ff',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: true
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Number of Posts'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Avg Engagement per Post'
                            },
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Create/update timing chart
        function updateTimingChart() {
            const ctx = document.getElementById('timingChart').getContext('2d');

            if (charts.timing) {
                charts.timing.destroy();
            }

            const hours = Array.from({length: 24}, (_, i) => i);
            const engagementByHour = hours.map(h => {
                if (h >= 8 && h <= 10) return Math.floor(Math.random() * 1000 + 3000);
                if (h >= 12 && h <= 14) return Math.floor(Math.random() * 1200 + 3500);
                if (h >= 18 && h <= 21) return Math.floor(Math.random() * 1500 + 4000);
                return Math.floor(Math.random() * 800 + 1000);
            });

            charts.timing = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: hours.map(h => `${h}:00`),
                    datasets: [{
                        label: 'Average Engagement',
                        data: engagementByHour,
                        backgroundColor: hours.map(h => {
                            if ((h >= 8 && h <= 10) || (h >= 12 && h <= 14) || (h >= 18 && h <= 21)) {
                                return '#27ae60';
                            }
                            return '#3498db';
                        }),
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Update dashboard
        function updateDashboard() {
            const loading = document.getElementById('loading');
            loading.classList.add('active');

            setTimeout(() => {
                const platform = document.getElementById('platformSelect').value;
                const days = parseInt(document.getElementById('timeRange').value);

                const data = generateSocialMediaData(platform, days);

                updateStats(data);
                updateFollowersChart(data);
                updatePlatformChart();
                updateContentTypeChart();
                updateEngagementChart(data);
                updatePostPerformanceChart(data);
                updateTimingChart();

                loading.classList.remove('active');
            }, 500);
        }

        // Event listeners
        document.getElementById('platformSelect').addEventListener('change', updateDashboard);
        document.getElementById('timeRange').addEventListener('change', updateDashboard);
        document.getElementById('refreshBtn').addEventListener('click', updateDashboard);

        // Initial load
        updateDashboard();