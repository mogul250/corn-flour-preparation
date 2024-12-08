-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2024 at 01:21 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms`
--

-- --------------------------------------------------------

--
-- Table structure for table `debts`
--

CREATE TABLE `debts` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `weight` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `p_amount` float NOT NULL,
  `r_amount` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `debts`
--

INSERT INTO `debts` (`id`, `reporter`, `client`, `weight`, `g_amount`, `p_amount`, `r_amount`, `comment`, `date`) VALUES
('oyuv35', 'nyamanswa', 'heshima', '800', 1000000, 200000, 800000, 'nayamuhaye', '2024-12-08 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` varchar(255) NOT NULL,
  `names` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `salary` int(255) NOT NULL,
  `saving` int(255) NOT NULL,
  `social` int(122) NOT NULL,
  `advance` int(122) NOT NULL,
  `r_salary` int(122) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `names`, `title`, `phone`, `salary`, `saving`, `social`, `advance`, `r_salary`, `date`) VALUES
('t6c0rk', 'HESHIMA HERBERT', 'CFO', '0790861884', 100000, 100000, 10000, 2345, 3456, '2024-12-05 21:43:43');

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `diesel` float NOT NULL,
  `lifters` float NOT NULL,
  `boys` float NOT NULL,
  `driver` float NOT NULL,
  `room` float NOT NULL,
  `food` float NOT NULL,
  `travel` float NOT NULL,
  `r_amount` float NOT NULL,
  `inc_amount` float NOT NULL,
  `g_amount` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `o_m` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `reporter`, `diesel`, `lifters`, `boys`, `driver`, `room`, `food`, `travel`, `r_amount`, `inc_amount`, `g_amount`, `comment`, `o_m`, `date`) VALUES
('a6v8x8', 'kamanayo', 1000, 1000, 10001, 1000, 110000, 20000, 30000, 30030, 202002, 22020, 'byajunze', 0, '2024-11-27 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `leftovers`
--

CREATE TABLE `leftovers` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `w_pre` float NOT NULL,
  `w_incoming` float NOT NULL,
  `w_tot` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leftovers`
--

INSERT INTO `leftovers` (`id`, `reporter`, `w_pre`, `w_incoming`, `w_tot`, `comment`, `date`) VALUES
('tf0709', 'heshima', 100, 100, 200, 'dsds', '2024-11-25 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `leftover_out`
--

CREATE TABLE `leftover_out` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `price` float NOT NULL,
  `pm` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `r_amount` float NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leftover_out`
--

INSERT INTO `leftover_out` (`id`, `reporter`, `client`, `weight`, `price`, `pm`, `g_amount`, `r_amount`, `comment`, `date`) VALUES
('36ev1g', 'heshima', 'fds', 1000, 10, 'momo', 10000, 1000, 'byakunze', '2024-12-01 00:00:00'),
('gx2z3h', 'dds', 'fds', 100, 100, '', 10000, 100, 'dededeede', '2024-11-25 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `mr`
--

CREATE TABLE `mr` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `commande` varchar(255) NOT NULL,
  `returned` varchar(255) NOT NULL,
  `expenses` varchar(255) NOT NULL,
  `debts` varchar(255) NOT NULL,
  `p_debts` varchar(255) NOT NULL,
  `pm` varchar(255) NOT NULL,
  `comment` varchar(100) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mr`
--

INSERT INTO `mr` (`id`, `reporter`, `commande`, `returned`, `expenses`, `debts`, `p_debts`, `pm`, `comment`, `date`) VALUES
('3a6yhk', 'heshima', '1000', '1000', '1000', '7000', '08808', 'Mobile Money', 'byakunze', '2024-12-04 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `packaging`
--

CREATE TABLE `packaging` (
  `id` varchar(255) NOT NULL,
  `incoming_c` float NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `waste_e` float NOT NULL,
  `f_e` varchar(255) NOT NULL,
  `if_t` float NOT NULL,
  `is_t` float NOT NULL,
  `ma_t` float NOT NULL,
  `nf_t` float NOT NULL,
  `sack_no` varchar(255) NOT NULL,
  `new_food` varchar(500) NOT NULL,
  `ifunguro` varchar(500) NOT NULL,
  `isezerano` varchar(500) NOT NULL,
  `magaju` varchar(500) NOT NULL,
  `envelopes` float NOT NULL,
  `waste_f` float NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packaging`
--

INSERT INTO `packaging` (`id`, `incoming_c`, `reporter`, `waste_e`, `f_e`, `if_t`, `is_t`, `ma_t`, `nf_t`, `sack_no`, `new_food`, `ifunguro`, `isezerano`, `magaju`, `envelopes`, `waste_f`, `comment`, `date`) VALUES
('61375a', 100, 'heshima', 0, '{\"IF\":3434,\"IS\":77887,\"MA\":787,\"NF\":10000}', 0, 0, 650, 310, '100', '{\"5\":2,\"10\":20,\"25\":4}', '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":16,\"10\":7,\"25\":20}', 50, 2, 'deee', '2024-11-30 11:00:00'),
('6p7ak9', 100, 'heshima', 0, '{\"IF\":3434,\"IS\":77887,\"MA\":787,\"NF\":10000}', 0, 0, 650, 2200, '100', '{\"5\":100,\"10\":70,\"25\":40}', '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":16,\"10\":7,\"25\":20}', 50, 200, 'byaje', '2024-12-01 16:55:00'),
('i3k15q', 100, 'heshima', 0, '{\"IF\":3434,\"IS\":77887,\"MA\":787,\"NF\":10000}', 0, 0, 650, 310, '100', '{\"5\":2,\"10\":20,\"25\":4}', '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":0,\"10\":0,\"25\":0}', '{\"5\":16,\"10\":7,\"25\":20}', 50, 200, 'byaje', '2024-12-01 16:50:47'),
('lue98w', 1100, 'heshima', 787, '{\"IF\":3434,\"IS\":778,\"MA\":787,\"NF\":100}', 330, 410, 970, 300, '', '{\"5\":20,\"10\":10,\"25\":4}', '{\"5\":12,\"10\":7,\"25\":8}', '{\"5\":12,\"10\":10,\"25\":10}', '{\"5\":160,\"10\":7,\"25\":4}', 18, 800, 'byakunze', '2024-11-24 00:00:00'),
('y87i07', 1100, 'heshima', 787, '{\"IF\":3434,\"IS\":778,\"MA\":787,\"NF\":100}', 330, 410, 970, 300, '', '{\"5\":20,\"10\":10,\"25\":4}', '{\"5\":12,\"10\":7,\"25\":8}', '{\"5\":12,\"10\":10,\"25\":10}', '{\"5\":160,\"10\":7,\"25\":4}', 18, 800, 'byakunze', '2024-11-23 10:38:32');

-- --------------------------------------------------------

--
-- Table structure for table `packaging_track`
--

CREATE TABLE `packaging_track` (
  `id` varchar(255) NOT NULL,
  `weights` varchar(700) NOT NULL,
  `r_weights` varchar(1000) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `if_t` float NOT NULL,
  `is_t` float NOT NULL,
  `ma_t` float NOT NULL,
  `nf_t` float NOT NULL,
  `env_t` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packaging_track`
--

INSERT INTO `packaging_track` (`id`, `weights`, `r_weights`, `act_type`, `destination`, `if_t`, `is_t`, `ma_t`, `nf_t`, `env_t`, `date`) VALUES
('6p7ak9', '{\"NF\":2200,\"IS\":0,\"MA\":650,\"IF\":0,\"envelope\":100}', '{\"NF\":{\"5\":242,\"10\":110,\"25\":84},\"IS\":{\"5\":0,\"10\":0,\"25\":0},\"IF\":{\"5\":0,\"10\":0,\"25\":0},\"MA\":{\"5\":32,\"10\":14,\"25\":40},\"envelope\":{\"2\":100}}', 'add', 'packaging', 0, 0, 1300, 610, 100, '2024-12-01 16:55:00'),
('70937r', '{\"NF\":1900,\"IS\":0,\"MA\":0,\"IF\":0,\"envelope\":250}', '{\"NF\":{\"5\":140,\"10\":20,\"25\":40},\"IS\":{\"5\":0,\"10\":0,\"25\":0},\"IF\":{\"5\":0,\"10\":0,\"25\":0},\"MA\":{\"5\":0,\"10\":0,\"25\":0},\"envelope\":{\"2\":null}}', 'minus', 'sales', 0, 0, 0, -1900, -250, '2024-12-01 16:45:57'),
('7h13j0', '{\"NF\":300,\"IS\":0,\"MA\":0,\"IF\":0,\"envelope\":250}', '{\"NF\":{\"5\":262,\"10\":120,\"25\":88},\"IS\":{\"5\":0,\"10\":0,\"25\":0},\"IF\":{\"5\":0,\"10\":0,\"25\":0},\"MA\":{\"5\":32,\"10\":14,\"25\":40},\"envelope\":{\"2\":null}}', 'minus', 'sales', 0, 0, 1300, 310, -150, '2024-12-01 17:03:33'),
('i3k15q', '{\"NF\":310,\"IS\":0,\"MA\":650,\"IF\":0,\"envelope\":100}', '{\"NF\":{\"5\":142,\"10\":40,\"25\":44},\"IS\":{\"5\":0,\"10\":0,\"25\":0},\"IF\":{\"5\":0,\"10\":0,\"25\":0},\"MA\":{\"5\":16,\"10\":7,\"25\":20},\"envelope\":{\"2\":50}}', 'add', 'packaging', 0, 0, 650, -1590, 0, '2024-12-01 16:50:47'),
('q4pko7', '{\"NF\":40,\"IS\":0,\"MA\":0,\"IF\":0,\"envelope\":250}', '{\"NF\":{\"5\":null,\"10\":null,\"25\":null},\"IS\":{\"5\":null,\"10\":null,\"25\":null},\"IF\":{\"5\":null,\"10\":null,\"25\":null},\"MA\":{\"5\":null,\"10\":null,\"25\":null},\"envelope\":{\"2\":null}}', 'minus', 'sales', 0, 0, 1300, 270, -400, '2024-12-01 17:12:11'),
('ykr67y', '{\"NF\":300,\"IS\":0,\"MA\":0,\"IF\":0,\"envelope\":100}', '{\"NF\":{\"5\":20,\"10\":10,\"25\":4},\"IS\":{\"5\":0,\"10\":0,\"25\":0},\"IF\":{\"5\":0,\"10\":0,\"25\":0},\"MA\":{\"5\":0,\"10\":0,\"25\":0},\"envelope\":{\"2\":50}}', 'minus', 'sales', 0, 0, 1300, -30, -500, '2024-12-01 17:16:15');

-- --------------------------------------------------------

--
-- Table structure for table `preparation`
--

CREATE TABLE `preparation` (
  `id` varchar(255) NOT NULL,
  `incoming_c` float NOT NULL,
  `prepared_c` float NOT NULL,
  `waste_f` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `preparation`
--

INSERT INTO `preparation` (`id`, `incoming_c`, `prepared_c`, `waste_f`, `reporter`, `comment`, `date`) VALUES
('b40z7n', 100, 98, '2', 'heshima', 'byari nezaaa', '2024-11-11 13:08:34');

-- --------------------------------------------------------

--
-- Table structure for table `preparation_track`
--

CREATE TABLE `preparation_track` (
  `id` varchar(255) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `destination` varchar(255) NOT NULL,
  `r_weight` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `preparation_track`
--

INSERT INTO `preparation_track` (`id`, `act_type`, `weight`, `destination`, `r_weight`, `date`) VALUES
('0848f5', 'minus', -1100, 'packaging', 95800, '2024-11-15 10:07:03'),
('0f4f89', 'minus', -1100, 'packaging', 96900, '2024-11-15 00:52:05'),
('25a2f1', 'minus', -100, 'packaging', 98000, '2024-11-14 11:02:33'),
('54v0mo', 'minus', -100, 'packaging', 198, '2024-11-13 21:31:37'),
('5wz3uj', 'minus', -1100, 'packaging', 93600, '2024-11-17 10:07:58'),
('61375a', 'minus', -100, 'packaging', 91300, '2024-11-30 23:42:22'),
('6p7ak9', 'minus', -100, 'packaging', 91100, '2024-12-01 16:55:00'),
('b40z7n', 'add', 98, 'preparation', 98, '2024-11-11 13:08:34'),
('i3k15q', 'minus', -100, 'packaging', 91200, '2024-12-01 16:50:47'),
('llwtyl', 'minus', -1100, 'packaging', 94700, '2024-11-15 10:11:08'),
('lue98w', 'minus', -1100, 'packaging', 91400, '2024-11-23 10:44:04'),
('y87i07', 'minus', -1100, 'packaging', 92500, '2024-11-23 10:38:32');

-- --------------------------------------------------------

--
-- Table structure for table `p_debts`
--

CREATE TABLE `p_debts` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `client` varchar(255) NOT NULL,
  `debt` float NOT NULL,
  `p_debt` float NOT NULL,
  `pm` varchar(255) NOT NULL,
  `r_debt` float NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `p_debts`
--

INSERT INTO `p_debts` (`id`, `reporter`, `client`, `debt`, `p_debt`, `pm`, `r_debt`, `comment`, `date`) VALUES
('01tybd', 'kapoo', 'oyuv35', 900000, 100000, 'Mobile Money', 800000, 'byakunze', '2024-12-08 00:00:00'),
('o90w25', 'kapoo', 'oyuv35', 1000000, 100000, 'Cash', 900000, 'yayampaye', '2024-12-08 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `returns`
--

CREATE TABLE `returns` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `ifunguro` varchar(1000) NOT NULL,
  `isezerano` varchar(1000) NOT NULL,
  `magaju` varchar(1000) NOT NULL,
  `new_food` varchar(1000) NOT NULL,
  `envelope` varchar(1000) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `returns`
--

INSERT INTO `returns` (`id`, `reporter`, `ifunguro`, `isezerano`, `magaju`, `new_food`, `envelope`, `comment`, `date`) VALUES
('0', '0', '{\"5\":181802,\"10\":901,\"25\":32}', '{\"5\":12121,\"10\":808,\"25\":31192}', '{\"5\":14141,\"10\":6061,\"25\":24279}', '{\"5\":1600,\"10\":10,\"25\":4}', '{\"5\":16162}', 'dsdss', '2024-11-12 00:00:00'),
('0jdf8t', 'heshima', '{\"5\":22,\"10\":12,\"25\":23}', '{\"5\":20,\"10\":70,\"25\":28}', '{\"5\":14,\"10\":77,\"25\":4}', '{\"5\":20,\"10\":60,\"25\":4}', '{\"5\":160}', 'byari neza\n', '2024-11-26 00:00:00'),
('724336', '0', '{\"5\":181802,\"10\":901,\"25\":32}', '{\"5\":12121,\"10\":808,\"25\":31192}', '{\"5\":14141,\"10\":6061,\"25\":24279}', '{\"5\":1600,\"10\":10,\"25\":4}', '{\"5\":16162}', '', '2024-11-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `distributor` varchar(255) NOT NULL,
  `g_amount` float NOT NULL,
  `no_sacks` int(11) NOT NULL,
  `ifunguro` varchar(700) NOT NULL,
  `isezerano` varchar(700) NOT NULL,
  `magaju` varchar(700) NOT NULL,
  `new_food` varchar(700) NOT NULL,
  `envelope` varchar(700) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `reporter`, `distributor`, `g_amount`, `no_sacks`, `ifunguro`, `isezerano`, `magaju`, `new_food`, `envelope`, `comment`, `date`) VALUES
('h1m22e', 'hirwa', 'jeremie', 1000000, 10, '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":0,\"10\":0,\"25\":8},\"pricings\":{\"5\":null,\"10\":null,\"25\":3000},\"totals\":{\"5\":0,\"10\":0,\"25\":24000}}', '{\"weights\":{\"5\":20},\"pricings\":{\"5\":1000},\"totals\":{\"5\":20000}}', 'ssdsds', '2024-11-12 00:00:00'),
('jyg0f6', 'heshima', 'kapooo', 1000, 10, '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":null,\"10\":null,\"25\":null},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"weights\":{\"5\":14,\"10\":10,\"25\":8},\"pricings\":{\"5\":8000,\"10\":15000,\"25\":20000},\"totals\":{\"5\":112000,\"10\":150000,\"25\":160000}}', '{\"weights\":{\"5\":50},\"pricings\":{\"5\":1000},\"totals\":{\"5\":50000}}', 'good', '2024-12-01 16:20:50'),
('tt7o3i', 'heshima', 'kapooo', 1000, 10, '{\"weights\":{\"5\":64,\"10\":200,\"25\":129},\"pricings\":{\"5\":1000,\"10\":3343,\"25\":5647},\"totals\":{\"5\":64000,\"10\":668600,\"25\":728463}}', '{\"weights\":{\"5\":200,\"10\":10,\"25\":8},\"pricings\":{\"5\":1000,\"10\":100,\"25\":1000},\"totals\":{\"5\":200000,\"10\":1000,\"25\":8000}}', '{\"weights\":{\"5\":202,\"10\":100,\"25\":40},\"pricings\":{\"5\":1000,\"10\":100,\"25\":1101},\"totals\":{\"5\":202000,\"10\":10000,\"25\":44040}}', '{\"weights\":{\"5\":20,\"10\":20,\"25\":8},\"pricings\":{\"5\":1992,\"10\":5000,\"25\":10000},\"totals\":{\"5\":39840,\"10\":100000,\"25\":80000}}', '{\"weights\":{\"5\":20},\"pricings\":{\"5\":100},\"totals\":{\"5\":2000}}', 'ewewew', '2024-11-19 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sales_n_returns`
--

CREATE TABLE `sales_n_returns` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(1000) NOT NULL,
  `distributor` varchar(255) NOT NULL,
  `loc` varchar(255) NOT NULL,
  `pm` varchar(255) NOT NULL,
  `p_sold` varchar(1000) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_n_returns`
--

INSERT INTO `sales_n_returns` (`id`, `reporter`, `distributor`, `loc`, `pm`, `p_sold`, `comment`, `date`) VALUES
('ykr67y', 'heshima', 'kapooo', 'nyamirambo', 'mobile_money', '{\"NF\":{\"weights\":{\"5\":20,\"10\":10,\"25\":4},\"pricings\":{\"5\":100,\"10\":100,\"25\":100},\"totals\":{\"5\":2000,\"10\":1000,\"25\":400}},\"IS\":{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}},\"IF\":{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}},\"MA\":{\"weights\":{\"5\":0,\"10\":0,\"25\":0},\"pricings\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}},\"envelope\":{\"weights\":{\"2\":50},\"pricings\":{\"2\":100},\"totals\":{\"2\":5000}}}', 'byakunze', '2024-12-01 17:16:15');

-- --------------------------------------------------------

--
-- Table structure for table `sales_track`
--

CREATE TABLE `sales_track` (
  `id` varchar(255) NOT NULL,
  `weights` varchar(255) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `totals` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales_track`
--

INSERT INTO `sales_track` (`id`, `weights`, `act_type`, `destination`, `totals`, `date`) VALUES
('ykr67y', '{\"NF\":300,\"IS\":0,\"MA\":0,\"IF\":0,\"envelope\":100}', 'add', 'sales', '{\"nf\":300,\"is\":0,\"ma\":0,\"if\":0,\"envelope\":100}', '2024-12-01 17:16:15');

-- --------------------------------------------------------

--
-- Table structure for table `stock1`
--

CREATE TABLE `stock1` (
  `id` varchar(255) NOT NULL,
  `dist_names` varchar(255) NOT NULL,
  `dist_plate_no` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `dryness` varchar(255) NOT NULL,
  `moldness` varchar(255) NOT NULL,
  `net_price` float NOT NULL,
  `gross_price` float NOT NULL,
  `amount_paid` float NOT NULL,
  `r_amount` float NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock1`
--

INSERT INTO `stock1` (`id`, `dist_names`, `dist_plate_no`, `weight`, `dryness`, `moldness`, `net_price`, `gross_price`, `amount_paid`, `r_amount`, `reporter`, `comment`, `date`) VALUES
('2156k6', 'nyamanswa', 'rah008d', 4000, '199', '192', 100000, 120000, 1200000, 1000, 'kamanayo', 'hhhhh', '2024-12-02 00:00:00'),
('h3s554', 'nyamanswa', 'rah008d', 4000, '199', '192', 100000, 120000, 1200000, 1000, 'kamanayo', 'hhhhh', '2024-12-02 00:00:00'),
('y656v2', 'nyamanswa', 'rah008d', 1000, '199', '192', 100000, 120000, 1200000, 1000, 'kamanayo', 'hhhhh', '2024-12-01 00:00:00'),
('z29v19', 'nyamanswa', 'rah008d', 3000, '199', '192', 100000, 120000, 1200000, 1000, 'kamanayo', 'hhhhh', '2024-11-30 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `stock1_track`
--

CREATE TABLE `stock1_track` (
  `id` varchar(255) NOT NULL,
  `act_type` varchar(255) NOT NULL,
  `weight` float NOT NULL,
  `destination` varchar(255) NOT NULL,
  `r_weight` float NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock1_track`
--

INSERT INTO `stock1_track` (`id`, `act_type`, `weight`, `destination`, `r_weight`, `date`) VALUES
('2156k6', 'add', 4000, 'stock1', 12000, '2024-12-02 00:00:00'),
('h3s554', 'add', 4000, 'stock1', 8000, '2024-12-02 00:00:00'),
('y656v2', 'add', 1000, 'stock1', 1000, '2024-11-30 00:00:00'),
('z29v19', 'add', 3000, 'stock1', 4000, '2024-12-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `stock_track`
--

CREATE TABLE `stock_track` (
  `id` varchar(255) NOT NULL,
  `reporter` varchar(255) NOT NULL,
  `sack_no` varchar(255) NOT NULL,
  `ifunguro` varchar(1000) NOT NULL,
  `isezerano` varchar(1000) NOT NULL,
  `magaju` varchar(1000) NOT NULL,
  `new_food` varchar(1000) NOT NULL,
  `envelope` varchar(1000) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock_track`
--

INSERT INTO `stock_track` (`id`, `reporter`, `sack_no`, `ifunguro`, `isezerano`, `magaju`, `new_food`, `envelope`, `comment`, `date`) VALUES
('0', 'heshima', '100', '{\"incoming\":{\"5\":0,\"10\":0,\"25\":0},\"current\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"incoming\":{\"5\":0,\"10\":0,\"25\":0},\"current\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"incoming\":{\"5\":0,\"10\":0,\"25\":0},\"current\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"incoming\":{\"5\":16,\"10\":70,\"25\":4},\"current\":{\"5\":78,\"10\":10,\"25\":100},\"totals\":{\"5\":94,\"10\":80,\"25\":104}}', '{\"incoming\":{\"5\":20},\"current\":{\"5\":5},\"totals\":{\"5\":25}}', 'byaciyemo', '2024-11-26 00:00:00'),
('27', 'heshima', '1001', '{\"incoming\":{\"5\":0,\"10\":0,\"25\":0},\"current\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"incoming\":{\"5\":0,\"10\":0,\"25\":0},\"current\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"incoming\":{\"5\":0,\"10\":0,\"25\":0},\"current\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"incoming\":{\"5\":0,\"10\":8,\"25\":4},\"current\":{\"5\":0,\"10\":90,\"25\":800},\"totals\":{\"5\":0,\"10\":98,\"25\":804}}', '{\"incoming\":{\"5\":16},\"current\":{\"5\":6},\"totals\":{\"5\":22}}', 'byari neza', '2024-11-25 00:00:00'),
('77', '0', '1001', '{\"incoming\":{\"5\":0,\"10\":0,\"25\":0},\"current\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"incoming\":{\"5\":0,\"10\":0,\"25\":0},\"current\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"incoming\":{\"5\":0,\"10\":0,\"25\":0},\"current\":{\"5\":0,\"10\":0,\"25\":0},\"totals\":{\"5\":0,\"10\":0,\"25\":0}}', '{\"incoming\":{\"5\":0,\"10\":8,\"25\":4},\"current\":{\"5\":0,\"10\":90,\"25\":800},\"totals\":{\"5\":0,\"10\":98,\"25\":804}}', '{\"incoming\":{\"5\":16},\"current\":{\"5\":6},\"totals\":{\"5\":22}}', 'byari neza', '2024-11-25 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `names` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `2FA` varchar(255) DEFAULT NULL,
  `dateadded` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `names`, `email`, `role`, `password`, `2FA`, `dateadded`) VALUES
('1', 'SYSTEM', 'info@system.com', 'SYSTEM', '$2b$10$gPipJR4kqPUt/lKmhn8/lOwWQSvexGhayV.QnWnj7TLwOt0vR/wY2', NULL, '2024-11-06 16:43:38'),
('E15JV9y', 'TYCOON', 'hesh.teo@gmail.com', 'SYSTEM', '$2b$10$n4utGso5ubssqUKd6S3rcOXuoYz2AyhKdr1aBWWDgk20MIRmQ3Wb2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiRTE1SlY5eSIsInJvbGUiOiJTWVNURU0iLCJpYXQiOjE3MzM2NTMxMzAsImV4cCI6MTczMzY1MzczMH0.IAGjrJnXnmD8s-DlwBWvDKlu_gNwze9yp-RdNwe_naQ', '2024-11-06 19:34:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `debts`
--
ALTER TABLE `debts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leftovers`
--
ALTER TABLE `leftovers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leftover_out`
--
ALTER TABLE `leftover_out`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mr`
--
ALTER TABLE `mr`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packaging`
--
ALTER TABLE `packaging`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packaging_track`
--
ALTER TABLE `packaging_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preparation`
--
ALTER TABLE `preparation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `preparation_track`
--
ALTER TABLE `preparation_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `p_debts`
--
ALTER TABLE `p_debts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `returns`
--
ALTER TABLE `returns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_n_returns`
--
ALTER TABLE `sales_n_returns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales_track`
--
ALTER TABLE `sales_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock1`
--
ALTER TABLE `stock1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock1_track`
--
ALTER TABLE `stock1_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock_track`
--
ALTER TABLE `stock_track`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
