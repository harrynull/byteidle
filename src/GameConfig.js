export const COMPONENTS = [
    {
        name: 'Raspberry Pi',
        description: '24 小时开机的服务器。虽然很便宜，但是性能也一般。',
        baseValue: 1,
        cost: 10,
        costModifier: 1.5,
        owned: 0
    },
    {
        name: '1c 0.5g 阿里云 ECS 服务器 (抢占式实例)',
        description: '年轻人的第一台云服务器',
        baseValue: 64,
        cost: 1024,
        costModifier: 1.2,
        owned: 0
    },
    {
        name: '2c 4g AWS 服务器',
        description: '中规中矩的服务器，可以收割来自世界各地的数据',
        baseValue: 1024 * 16,
        cost: 1024 * 1024,
        costModifier: 1.2,
        owned: 0
    },
    {
        name: 'kubernetes 服务器集群',
        description: '虽然很贵，但是扩展成本比较低',
        baseValue: 1024 * 1024,
        cost: 1024 * 1024 * 128,
        costModifier: 1.05,
        owned: 0
    },
    {
        name: '量子计算机',
        description: '来自未来的科技，满足你对计算的所有幻想',
        baseValue: 1024 * 1024 * 16,
        cost: 1024 * 1024 * 1024,
        costModifier: 1.5,
        owned: 0
    },
    {
        name: '跨星球量子隧道',
        description: '遇事不决量子力学。在各个恒星中使用量子隧道来以接近光速地传输信息，与外星人构建数据网络。',
        baseValue: 1024 * 1024 * 512,
        cost: 1024 * 1024 * 1024 * 512,
        costModifier: 1.2,
        owned: 0
    },
    {
        name: '物质压缩器',
        description: '打破物理限制，将物理物质数据化存储',
        baseValue: 1024 * 1024 * 1024 * 10,
        cost: 1024 * 1024 * 1024 * 1024,
        costModifier: 1.5,
        owned: 0
    },
    {
        name: '电话微波炉 NG Max Pro',
        description: '获取不同时间线中生产的数据',
        baseValue: 1024 * 1024 * 1024 * 1024,
        cost: 1024 * 1024 * 1024 * 1024 * 1024 * 512,
        costModifier: 1.1,
        owned: 0
    },
    {
        name: '比特召唤祭坛',
        description: '神秘学大成功！通过魔法祭坛直接从异次元中凭空召唤数据',
        baseValue: 1024 * 1024 * 1024 * 1024 * 256,
        cost: 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        costModifier: 2,
        owned: 0
    }
]

export const DEVELOPMENTS = [
    {
        icon: 'wifi',
        color: 'green',
        name: '1 Mbps 小水管',
        effect: '增加 1 Mbps 的数据生产速度',
        description: '从隔壁的咖啡店蹭来的网络。现在可以获取网络上的数据了。',
        cost: 30 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc + 1024 * 1024 / 8,
        initModifier: () => 0
    },
    {
        icon: 'wifi',
        color: 'blue',
        name: '100 Mbps 家宽',
        effect: '增加 100 Mbps 的数据生产速度；所有来源的数据生产加快 15%',
        description: '与正规运营商签订了一年的合约，还送了一张手机卡。现在可以以更快的速度获取网络上的数据了。',
        cost: 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc + 100 * 1024 * 1024 / 8,
        initModifier: function () {
            this.globalModifier *= 1.15
        }
    },
    {
        icon: 'wifi',
        color: 'purple',
        name: '1000 Mbps 商宽',
        effect: '增加 1000 Mbps 的数据生产速度；所有来源的数据生产加快 25%',
        description: '商业带宽具有更好的速度和稳定性，特别适合用于联网数据生产……或者是下载你的 Steam 游戏',
        cost: 60000 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc + 1000 * 1024 * 1024 / 8,
        initModifier: function () {
            this.globalModifier *= 1.25
        }
    },
    {
        icon: 'paper plane',
        color: 'blue',
        name: 'CN2',
        effect: '所有来源的数据生产加快 20%',
        description: '使用 CN2 线路更快地进行国际通讯',
        cost: 1000 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.20
        }
    },
    {
        icon: 'paper plane',
        color: 'purple',
        name: 'IPLC',
        effect: '所有来源的数据生产额外加快 35%',
        description: '使用 IPLC 线路更快地进行国际通讯',
        cost: 3 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.35
        }
    },
    {
        icon: 'paper plane',
        color: 'orange',
        name: '短距离量子传输',
        effect: '所有来源的数据生产额外加快 125%',
        description: '使用量子传输技术在你的数据中心之间快速传输数据',
        cost: 1024 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 2.25
        }
    },
    {
        icon: 'paragraph',
        color: 'green',
        name: 'UTF-8',
        effect: '所有来源的数据生产额外加快 20%。手动复制粘贴产生的字节提高一倍。',
        description: '使用 UTF-8 存储所有文字数据，这样有时候一个文字就会占用 4 个字节',
        cost: 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.2
            this.manualTypeModifier *= 2
        }
    },
    {
        icon: 'paragraph',
        color: 'blue',
        name: 'UTF-16',
        effect: '所有来源的数据生产额外加快 30%。手动复制粘贴产生的字节提高 8 倍。',
        description: '使用 UTF-16 存储所有文字数据，这样一个文字就会至少占用 2 个字节',
        cost: 64 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.3
            this.manualTypeModifier *= 8
        }
    },
    {
        icon: 'paragraph',
        color: 'purple',
        name: 'UTF-32',
        effect: '所有来源的数据生产额外加快 60%。手动复制粘贴产生 16 倍的字节。',
        description: '使用 UTF-32 存储所有文字数据，这样一个文字就会占用 4 个字节，此外，查找第 n 个字符的速度还变快了。什么？浪费？我磁盘大得很',
        cost: 128 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.6
            this.manualTypeModifier *= 16
        }
    },
    {
        icon: 'clipboard',
        color: 'green',
        name: '铁剪切板',
        effect: '手动复制粘贴产生 256 倍的字节。',
        description: '更换为铁质的剪切板，现在可以更有效率地大块复制粘贴了',
        cost: 128,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.manualTypeModifier *= 256
        }
    },
    {
        icon: 'clipboard',
        color: 'blue',
        name: '钻石剪切板',
        effect: '手动复制粘贴额外产生 128 倍的字节。',
        description: '钻石制作的 Ctrl C 和 Ctrl V，坚固耐用',
        cost: 128 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.manualTypeModifier *= 128
        }
    },
    {
        icon: 'clipboard',
        color: 'purple',
        name: '下界合金剪切板',
        effect: '所有来源的数据生产额外加快 40%。手动复制粘贴产生 128 倍的字节。',
        description: '用另一个世界取得的坚硬合金打造的剪切板，可以在缓冲区存储大量数据',
        cost: 128 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.4
            this.manualTypeModifier *= 128
        }
    },
    {
        icon: 'bolt',
        color: 'green',
        name: '太阳能电板',
        effect: '所有来源的数据生产额外加快 10%。',
        description: '自己搭建太阳能电池组来减少电费。此外还可以在限电的时候也接着跑数据',
        cost: 16 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.1
        }
    },
    {
        icon: 'bolt',
        color: 'blue',
        name: '核电站',
        effect: '所有来源的数据生产额外加快 25%。',
        description: '自己搭建核电站。不仅不用担心电费，还可以让所有服务器都超频',
        cost: 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.25
        }
    },
    {
        icon: 'bolt',
        color: 'purple',
        name: '核聚变发电',
        effect: '所有来源的数据生产额外加快 50%。',
        description: '使用可控核聚变将电力费用从你的开销中彻底去除，还可以卖掉多余的电',
        cost: 1024 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.5
        }
    },
    {
        icon: 'hand rock',
        color: 'purple',
        name: '字节跳动',
        effect: '所有来源的数据生产额外加快 100%。',
        description: '教会你的字节跳舞。跳动的字节使得它们的生产效率更高了！',
        cost: 512 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 2
        }
    },
    {
        icon: 'microchip',
        color: 'blue',
        name: 'AI 训练算法',
        effect: '所有来源的数据生产额外加快 150%。',
        description: '用已有的数据来训练 AI 模型，然后自动生成出新的数据',
        cost: 2 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 2.5
        }
    },
    {
        icon: 'git',
        color: 'green',
        name: 'git',
        effect: '所有资产<strong>购买价格</strong>的增长速度都会减缓',
        description: '使用 git 来管理所有的代码。终于不用在网盘上存 代码_最终_修改版_v2 (Copy).zip 了',
        cost: 16 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.priceModifierSlowDown += 0.05
        }
    },
    {
        icon: 'docker',
        color: 'blue',
        name: 'Docker',
        effect: '所有资产<strong>购买价格</strong>的增长速度都会减缓',
        description: '使用 Docker 来管理所有的数据生产系统。可爱的鲸鱼让运维成本降低了',
        cost: 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.priceModifierSlowDown += 0.05
        }
    },
    {
        icon: 'code',
        color: 'blue',
        name: '码农',
        effect: '每次复制粘贴将获得 0.2 秒自动产量的字节',
        description: '使得复制的代码会自动整合进代码库，大幅度加快手动复制粘贴产生的数据量',
        cost: 16 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.manualTypeMultiplier = 0.1
        }
    },
    {
        icon: 'code',
        color: 'purple',
        name: '史诗级攻城狮',
        effect: '每次复制粘贴将获得 2 秒自动产量的字节',
        description: '使得复制的代码会自动针对项目场景优化，大幅度加快手动复制粘贴产生的数据量',
        cost: 128 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.manualTypeMultiplier = 1
        }
    },
    {
        icon: 'plug',
        color: 'green',
        name: '树莓派电源',
        effect: '树莓派产生的数据数量翻倍',
        description: '给树莓派更换了更加稳定的电源',
        cost: 128,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.gameComponents[0].baseValue *= 2
        },
        unlockDescription: "需要至少 5 台树莓派解锁",
        unlockable: function () {
            return this.gameComponents[0].owned >= 5
        }
    },
    {
        icon: 'hdd',
        color: 'green',
        name: 'SSD',
        effect: '树莓派和阿里云产生的数据数量翻倍',
        description: '给树莓派和阿里云更换了 SSD 硬盘，IO 速度更快了',
        cost: 128 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.gameComponents[0].baseValue *= 2
            this.gameComponents[1].baseValue *= 2
        },
        unlockDescription: "需要至少 20 台树莓派、20 台阿里云服务器解锁",
        unlockable: function () {
            return this.gameComponents[0].owned >= 20 && this.gameComponents[1].owned >= 20
        }
    },
    {
        icon: 'hdd',
        color: 'blue',
        name: 'NVMe SSD (RAID 0)',
        effect: '树莓派和阿里云产生的数据数量提高 64 和 512 倍',
        description: '使用 RAID 0 和 NVMe SSD 进一步提高 IO 速度',
        cost: 128 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.gameComponents[0].baseValue *= 64
            this.gameComponents[1].baseValue *= 512
        },
        unlockDescription: "需要至少 40 台树莓派、40 台阿里云服务器解锁",
        unlockable: function () {
            return this.gameComponents[0].owned >= 40 && this.gameComponents[1].owned >= 40
        }
    },
    {
        icon: 'hdd',
        color: 'purple',
        name: 'HDFS',
        effect: '数据生产速度提高 2 倍',
        description: '使用 Hadoop 管理大规模数据',
        cost: 32 * 1024 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 2
        },
    },
    {
        icon: 'sitemap',
        color: 'green',
        name: '树莓丛',
        effect: '树莓派产生的数据数量提高 16 倍',
        description: '用专用的轻量软件使得在同一个局域网的树莓派之间可以对任务进行高效的负载均衡',
        cost: 1024 * 128,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.gameComponents[0].baseValue *= 16
        },
        unlockDescription: "需要至少 10 台树莓派解锁",
        unlockable: function () {
            return this.gameComponents[0].owned >= 10
        }
    },
    {
        icon: 'sitemap',
        color: 'blue',
        name: '树莓农场',
        effect: '树莓派产生的数据数量提高 512 倍',
        description: '通过神秘的手段，使得树莓可以长出更多的树莓',
        cost: 1024 * 1024 * 128,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.gameComponents[0].baseValue *= 512
        },
        unlockDescription: "需要至少 30 台树莓派解锁",
        unlockable: function () {
            return this.gameComponents[0].owned >= 30
        }
    },
    {
        icon: 'sitemap',
        color: 'purple',
        name: 'kubernetes-based 树莓农场',
        effect: '树莓派和 kubernetes 集群的数据产速提高 512 倍',
        description: '树莓和你的 kubernetes 集群产生了不可言说的相互反应，使得树莓不仅可以被吃，还可以作为 kubernetes 的节点',
        cost: 1024 * 1024 * 1024 * 1024 * 1024 * 8,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.gameComponents[0].baseValue *= 512
            this.gameComponents[3].baseValue *= 512
        },
        unlockDescription: "需要至少 100 台树莓派、350 kubernetes 集群解锁",
        unlockable: function () {
            return this.gameComponents[0].owned >= 100 && this.gameComponents[3].owned >= 350
        }
    },
    {
        icon: 'address card',
        color: 'green',
        name: '销售中介',
        effect: '降低所有资产<strong>购买价格</strong>的增长速度',
        description: '大量购置服务器使得第三方销售代表找到了你，他们声称可以给你最优惠的价格',
        cost: 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.priceModifierSlowDown += 0.05
        },
        unlockDescription: "需要至少 30 台树莓派和至少 20 台阿里云服务器解锁",
        unlockable: function () {
            return this.gameComponents[0].owned >= 30 && this.gameComponents[1].owned >= 20
        }
    },
    {
        icon: 'address card',
        color: 'blue',
        name: '企业合作',
        effect: '降低所有资产<strong>购买价格</strong>的增长速度',
        description: '生产厂商视你为大客户，直接派代表和你签订了特惠价格',
        cost: 1024 * 1024 * 1024 * 512,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.priceModifierSlowDown += 0.05
        },
        unlockDescription: "需要至少 50 台树莓派、 50 台阿里云服务器、50 台 AWS 服务器解锁",
        unlockable: function () {
            return this.gameComponents[0].owned >= 50 && this.gameComponents[1].owned >= 50 && this.gameComponents[2].owned >= 50
        }
    },
    {
        icon: 'address card',
        color: 'purple',
        name: '星际贸易',
        effect: '降低所有资产<strong>购买价格</strong>的增长速度；提高跨星球量子隧道 150% 数据生产速度',
        description: '大规模发展星际贸易，与附近恒星的数据中心达成合作，收集全星系的数据',
        cost: 1024 * 1024 * 1024 * 1024 * 1024 * 16,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.priceModifierSlowDown += 0.05
            this.gameComponents[5].baseValue *= 2.5
        },
        unlockDescription: "需要至少 50 条跨星球量子隧道",
        unlockable: function () {
            return this.gameComponents[5].owned >= 50
        }
    },
    {
        icon: 'money bill',
        color: 'blue',
        name: '数据银行',
        effect: '每秒都会产生现在数据 0.01% 的新数据',
        description: '把数据存进银行，赚取利息',
        cost: 128 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.dataInterest = 0.0001
        }
    },
    {
        icon: 'steam',
        color: 'purple',
        name: 'Steam 游戏',
        effect: '数据生产速度提高 50%',
        description: '把 Steam 上所有游戏都下载下来，显著提升开发者幸福度',
        cost: 30 * 1024 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= .5
        },
    },
    {
        icon: 'bitcoin',
        color: 'blue',
        name: '购买比特币',
        effect: '50% 概率目前字节数量翻倍，50% 概率目前字节数量清零（只能购买一次）',
        description: '梭哈比特币',
        cost: 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            if (!this.loading)
                this.currentBytes = Math.random() >= 0.5 ? Number(this.currentBytes) * 2 : 0
        },
    },
    {
        icon: 'bitcoin',
        color: 'purple',
        name: '购买比特币+',
        effect: '50% 概率获得 30 分钟等价产值的字节，50% 概率目前字节数量清零（只能购买一次）',
        description: '梭哈比特币，但是更稳健一点',
        cost: 1024 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            if (!this.loading)
                this.currentBytes = Math.random() >= 0.5 ? this.currentBytes + this.increasingRate * 1800 : 0
        },
    },
    {
        icon: 'bitcoin',
        color: 'orange',
        name: '购买比特币++',
        effect: '获得 1 小时等价产值的字节',
        description: '运用电话微波炉提前得知比特币涨势',
        cost: 1024 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            if (!this.loading) this.currentBytes = Math.random() >= 0.5 ? this.currentBytes + this.increasingRate * 3600 : 0
        },
        unlockDescription: "需要至少 1 部电话微波炉",
        unlockable: function () {
            return this.gameComponents[7].owned >= 1
        }
    },
    {
        icon: 'mouse pointer',
        color: 'blue',
        name: 'Reinforced index finger',
        effect: '数据生产速度提高 10%',
        description: '<q>The mouse and cursors are twice as efficient.</q>',
        cost: 16,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.1
        },
    },
    {
        icon: 'birthday cake',
        color: 'blue',
        name: 'The Cake Is a Lie',
        effect: '数据生产速度提高 10%',
        description: 'Time to be thinking with portals!',
        cost: 1024 * 16,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.1
        },
    },
    {
        icon: 'lightbulb',
        color: 'blue',
        name: 'Light Bulb',
        effect: '数据生产速度提高 10%',
        description: 'this light bulb recalls you of an adventure about saving a world and fixing the sun',
        cost: 1024 * 1024 * 16,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.1
        },
    },
    {
        icon: 'moon',
        color: 'blue',
        name: 'To The Moon',
        effect: '数据生产速度提高 10%',
        description: '发射探测火箭收集月球上的数据…… or dreams to do so',
        cost: 1024 * 1024 * 16,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.1
        },
    },
    {
        icon: 'snowflake',
        color: 'blue',
        name: '服务器制冷器',
        effect: '数据生产速度提高 10%',
        description: '<q>it\'s now 20% cooler</q>',
        cost: 1024 * 1024 * 1024 * 16,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.1
        },
    },
    {
        icon: 'heart',
        color: 'blue',
        name: 'SOUL',
        effect: '数据生产速度提高 10%',
        description: '<q>this heart fills you with determination</q>',
        cost: 1024 * 1024 * 1024 * 1024 * 16,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.1
        },
    },
    {
        icon: 'github',
        color: 'blue',
        name: 'GitHub',
        effect: '数据生产速度提高 10%',
        description: '下载 GitHub 上所有代码，以更快地<del>偷代码</del>复用代码',
        cost: 1024 * 1024 * 1024 * 1024 * 1024 * 16,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.1
        },
    },
    {
        icon: 'node js',
        color: 'blue',
        name: 'node_modules',
        effect: '数据生产速度提高 10%',
        description: 'yarn add *insert your favorite package*',
        cost: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 16,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 1.1
        },
    },
    {
        icon: 'chess knight',
        color: 'orange',
        name: 'EMagic Jam Boost',
        effect: '所有来源的生产速度翻倍',
        description: '等不及啦，搞快点 (可能会使游戏流程过快，谨慎开启)',
        cost: 0,
        owned: false,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 2
        }
    },
    {
        icon: 'chess queen',
        color: 'orange',
        name: '通关',
        effect: '通关游戏 (?)',
        description: '好多好多 1024',
        cost: 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        owned: false,
        loading: true,
        modifier: (inc,) => inc,
        initModifier: function () {
            this.globalModifier *= 2
        }
    },
]
