# improved-bassoon
# Expo Test App

A React Native app built with Expo that demonstrates CI/CD integration with GitHub Actions.

## Features

- **Counter Component**: Interactive counter with increment, decrement, and reset functionality
- **Text Input**: Real-time text input with display
- **Alert Integration**: Native alert functionality
- **Comprehensive Testing**: Unit tests with Jest and React Native Testing Library
- **CI/CD Pipeline**: Automated testing, building, and deployment with GitHub Actions
- **Type Safety**: Full TypeScript support
- **Code Quality**: ESLint configuration with React Native rules

## Getting Started

### Prerequisites

- Node.js (18.x or 20.x)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd expo-test-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

### Running on Different Platforms

```bash
# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Web Browser
npm run web
```

## Testing

Run the test suite:
```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Code Quality

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

## CI/CD Pipeline

The GitHub Actions workflow includes:

1. **Testing**: Runs on Node.js 18.x and 20.x
   - Type checking with TypeScript
   - Linting with ESLint
   - Unit tests with Jest
   - Coverage reporting

2. **Building**: 
   - Web build export
   - Build artifact storage

3. **EAS Build**: 
   - Cross-platform builds (iOS/Android)
   - Runs only on main branch

4. **Deployment**:
   - Publishes to Expo
   - Runs only on main branch

## Configuration

### Environment Variables

Set these secrets in your GitHub repository:

- `EXPO_TOKEN`: Your Expo access token

### EAS Configuration

Update `eas.json` with your project settings:
- Change the `projectId` in `app.json`
- Configure build profiles as needed

### App Configuration

Update `app.json`:
- Change app name and slug
- Update bundle identifiers
- Configure icons and splash screens

## Project Structure

```
expo-test-app/
├── App.tsx                 # Main app component
├── __tests__/             # Test files
│   └── App.test.tsx
├── .github/
│   └── workflows/
│       └── ci.yml         # GitHub Actions workflow
├── app.json               # Expo configuration
├── eas.json               # EAS Build configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.js           # ESLint configuration
└── README.md              # This file
```

## GitHub Pages Setup

To enable GitHub Pages deployment:

1. **Repository Settings**:
   - Go to your repository settings
   - Navigate to **Pages** section
   - Set source to "GitHub Actions"

2. **Update Repository Name**:
   - In `app.json`, change the `baseUrl` from `/expo-test-app/` to `/your-repo-name/`
   - This ensures assets load correctly on GitHub Pages

3. **Custom Domain** (optional):
   - Add a `CNAME` file to the root directory
   - Update `baseUrl` in `app.json` to match your domain

4. **Troubleshooting Blank Pages**:
   - The workflow automatically creates a `.nojekyll` file
   - Creates a `404.html` file for SPA routing
   - Includes fallback loading screen

## Available Scripts

- `npm start`: Start Expo development server
- `npm run ios`: Run on iOS simulator
- `npm run android`: Run on Android emulator
- `npm run web`: Run in web browser
- `npm run build:web`: Build for web deployment
- `npm run build:gh-pages`: Build specifically for GitHub Pages
- `npm test`: Run tests
- `npm run test:watch`: Run tests in watch mode
- `npm run test:coverage`: Run tests with coverage
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Fix ESLint issues
- `npm run type-check`: Run TypeScript type checking

## Testing Strategy

The app includes comprehensive tests for:
- Component rendering
- User interactions (button presses, text input)
- State management
- Alert functionality
- Edge cases and error handling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

MIT License - see LICENSE file for details