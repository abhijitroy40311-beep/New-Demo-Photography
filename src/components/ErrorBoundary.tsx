import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Camera } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photography';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Recovered from error:', error, errorInfo);
  }

  private handleReload = () => {
    // Clear hash and reload smoothly
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Camera className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-slate-900 mb-2">
              {BUSINESS_INFO.name}
            </h1>
            <p className="text-sm text-slate-600 mb-6">
              Welcome back to our India photography portfolio. Let's refresh the session smoothly.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs px-5 py-3 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <RefreshCw className="w-4 h-4 animate-spin-reverse" />
              <span>Refresh Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
